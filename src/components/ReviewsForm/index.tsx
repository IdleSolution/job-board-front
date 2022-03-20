import {useParams} from "react-router-dom";
import { Container, SingleInputContainer, Input, TagAndScoreContainer, AllInputsContainer,
    Select, TextArea, DatesContainer, DateContainer, SubmitButton, ButtonContainer, CurrentlyWorkingContainer } from './style';
import DatePicker from "react-datepicker";
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

export const ReviewsForm = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [rating, setRating] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [input, setInput] = useState<InputData>({
        position: '',
        rating: '1',
        comment: '',
        tag: ''
    });

    const onRatingChange = (score: any) => {
        setRating(score);
        setEndDate(null);
    };

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

    const onSubmit = async () => {
        setLoading(true);

        // @ts-ignore
        const timestamp = endDate - startDate;
        if(input.position.length !== 0 && timestamp > 0) {
            const dataToSend = {
                rating,
                position: input.position,
                comment: input.comment,
                tag: input.tag,
                from: startDate,
                to: endDate,
                issued: new Date(),
            }

            try {
                await axios.post(`https://localhost:5001/api/Reviews/${name}`, dataToSend);
                notify("Dodano recenzję!");
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
                    <h2 style={{textAlign: 'center'}}>Stwórz recenzję dla {name}</h2>
                    <AllInputsContainer>
                        <SingleInputContainer>
                            <p>Stanowisko</p>
                            <Input placeholder='eg. Intern' onChange={handleChange} name="position" autoComplete='off'/>
                        </SingleInputContainer>
                        <TagAndScoreContainer>
                            <div>
                                <p style={{textAlign: 'center'}}>Technologia</p>
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
                        <SingleInputContainer>
                            <p>Komentarz</p>
                            <TextArea placeholder='Co sądzisz o firmie?'  onChange={handleChange} name="comment"/>
                        </SingleInputContainer>
                        <CurrentlyWorkingContainer>
                            <input type='checkbox' id='currentlyWorking' onChange={() => setCurrentlyWorking(!currentlyWorking)}/>
                            <label htmlFor='currentlyWorking'>Dalej pracuje</label>
                        </CurrentlyWorkingContainer>
                        <DatesContainer>
                            <DateContainer>
                                <p>Rozpoczęcie pracy</p>
                                <DatePicker className='date-picker' selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                            </DateContainer>
                            <DateContainer>
                                <p>Zakończenie pracy</p>
                                <DatePicker disabled={currentlyWorking} className='date-picker' selected={endDate} onChange={(date:Date) => setEndDate(date)} />
                            </DateContainer>
                        </DatesContainer>
                        <ButtonContainer>
                            <SubmitButton onClick={() => onSubmit()}>Stwórz</SubmitButton>
                        </ButtonContainer>
                    </AllInputsContainer>
                </>
            )}



        </Container>
    )
}