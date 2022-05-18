import {useParams} from "react-router-dom";
import { Container, SingleInputContainer, TagAndScoreContainer, AllInputsContainer} from './../style';
import DatePicker from "react-datepicker";
import { Input, TextArea, SubmitButton, ButtonContainer, Select } from './../../ReviewsForm/style'
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Spinner from "../../Spinner";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { RatingStar } from "rating-star";
import { IInterview } from "../../../common/interfaces/Interview.interface";
import { useLocation } from 'react-router-dom'


interface InputData {
    position: string;
    rating: string;
    comment: string;
    tag: string;
}

type LocationState = { interview: IInterview; };

export const InterviewsEditForm = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const location = useLocation()
    const { interview } = location.state as LocationState


    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState<number>(1);

    const [input, setInput] = useState<InputData>({
        position: interview ? interview.position : '',
        rating: interview ? String(interview.difficulty) : '1',
        comment: interview ? interview.comment : '',
        tag: interview ? interview.tag : ''
    });

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:5000/api/Tags');
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

        const email = await axios.get("http://localhost:5000/api/User", {withCredentials: true}).then(res => res.data.email);

        if(input.position.length !== 0) {
            const dataToSend = {
                difficulty: rating,
                position: input.position,
                comment: input.comment,
                tag: input.tag,
                issued: new Date(),
                CreatorEmail: email,
            }

            try {
                await axios.put(`http://localhost:5000/api/Interviews/${interview.id}`, dataToSend, {withCredentials: true});
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
                    <h2 style={{textAlign: 'center'}}>Edytuj swój opis rekrutacji dla {name}</h2>
                    <AllInputsContainer>
                        <SingleInputContainer>
                            <p>Stanowisko</p>
                            <Input placeholder='eg. Intern' onChange={handleChange} name="position" autoComplete='off' value={interview.position} disabled/>
                        </SingleInputContainer>
                        <TagAndScoreContainer>
                            <div>
                                <p>Technologia</p>
                                <Select onChange={handleChange} name="tag" disabled>
                                    {tags.map(tag => (
                                        <option key={tag} selected={tag === interview.tag}>{tag}</option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <p style={{textAlign: 'center'}}>Ocena</p>
                                <RatingStar
                                    maxScore={5}
                                    id="123"
                                    rating={interview.difficulty}
                                />
                            </div>
                        </TagAndScoreContainer>
                        <SingleInputContainer style={{marginBottom: '2rem'}}>
                            <p>Komentarz</p>
                            <TextArea placeholder='Opisz proces rekrutacji, możliwe pytania etc.'  onChange={handleChange} name="comment" value={input.comment}/>
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