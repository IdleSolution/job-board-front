import {useParams} from "react-router-dom";
import { Container, SingleInputContainer, TagAndScoreContainer, AllInputsContainer} from './style';
import DatePicker from "react-datepicker";
import { Input, TextArea, SubmitButton, ButtonContainer, Select } from './../ReviewsForm/style'
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Spinner from "../Spinner";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { RatingStar } from "rating-star";


interface InputData {
    position: string;
    rating: string;
    comment: string;
    tag: string;
}

export const InterviewsForm = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState<number>(1);

    const [input, setInput] = useState<InputData>({
        position: '',
        rating: '1',
        comment: '',
        tag: ''
    });

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://localhost:5001/api/Tags');
            const data: string[] = res.data;

            setTags(data);
            setInput({...input, tag: data[0]});
        })()
    }, [])

    const notify = (msg: string) => toast(msg, {position: "bottom-right"})

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    const onRatingChange = (score: any) => {
        setRating(score);
    };

    const onSubmit = async () => {
        setLoading(true);

        if(input.position.length !== 0) {
            const dataToSend = {
                difficulty: rating,
                position: input.position,
                comment: input.comment,
                tag: input.tag,
                issued: new Date(),
            }

            try {
                await axios.post(`https://localhost:5001/api/Interviews/${name}`, dataToSend);
                notify("Dodano proces rekrutacji!");
                setLoading(false);
                navigate(`/company/${name}`, { replace: true });
            } catch(e: any) {
                notify(e.response.data);
                setLoading(false);
            }
        } else {
            notify("Błąd w podanych danych");
        }
        setLoading(false);

    }

    return (
        <Container>
            {loading ? (
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Spinner />
                </div>
            ) : (
                <>
                    <h2 style={{textAlign: 'center'}}>Stwórz opis rekrutacji dla {name}</h2>
                    <AllInputsContainer>
                        <SingleInputContainer>
                            <p>Stanowisko</p>
                            <Input placeholder='eg. Intern' onChange={handleChange} name="position" autoComplete='off'/>
                        </SingleInputContainer>
                        <TagAndScoreContainer>
                            <div>
                                <p>Technologia</p>
                                <Select onChange={handleChange} name="tag">
                                    {tags.map(tag => (
                                        <option key={tag}>{tag}</option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <p style={{textAlign: 'center'}}>Ocena</p>
                                <RatingStar
                                    clickable
                                    maxScore={5}
                                    id="123"
                                    rating={rating}
                                    onRatingChange={onRatingChange}
                                />
                            </div>
                        </TagAndScoreContainer>
                        <SingleInputContainer style={{marginBottom: '2rem'}}>
                            <p>Komentarz</p>
                            <TextArea placeholder='Opisz proces rekrutacji, możliwe pytania etc.'  onChange={handleChange} name="comment"/>
                        </SingleInputContainer>
                        <ButtonContainer>
                            <SubmitButton onClick={() => onSubmit()}>Stwórz</SubmitButton>
                        </ButtonContainer>
                    </AllInputsContainer>
                </>
            )}



        </Container>
    )
}