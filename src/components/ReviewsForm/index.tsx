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
    IsStillWorking: boolean;
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
        tag: '',
        IsStillWorking: false,
    });

    const onRatingChange = (score: any) => {
        setRating(score);
        setEndDate(null);
    };

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

    const onSubmit = async () => {
        setLoading(true);

        // @ts-ignore
        const timestamp = endDate - startDate;
        // @ts-ignore
        const email = await axios.get("http://localhost:5000/api/User", {withCredentials: true}).then(res => res.data.email);

        if(input.position.length !== 0 && (timestamp > 0 || !endDate)) {
            const dataToSend = {
                rating,
                position: input.position,
                comment: input.comment,
                tag: input.tag,
                from: startDate,
                to: endDate,
                issued: new Date(),
                isStillWorking: currentlyWorking,
                CreatorEmail: email,
            }

            try {
                const x = await axios.post(`http://localhost:5000/api/Reviews/${name}/`, dataToSend, {withCredentials: true});
                notify("Dodano recenzj??!");
                navigate(`/company/${name}`, { replace: true });
            } catch(e: any) {
                console.log(e.response);
                notify(e.response.data);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        } else {
            notify("B????d w podanych danych");
            setLoading(false);
        }
    }

    return (
        <Container>
            {loading ? (
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Spinner />
                </div>
            ) : (
                <>
                    <h2 style={{textAlign: 'center'}}>Stw??rz recenzj?? dla {name}</h2>
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
                            <TextArea placeholder='Co s??dzisz o firmie?'  onChange={handleChange} name="comment"/>
                        </SingleInputContainer>
                        <CurrentlyWorkingContainer>
                            <input type='checkbox' id='currentlyWorking' onChange={() => setCurrentlyWorking(!currentlyWorking)}/>
                            <label htmlFor='currentlyWorking'>Dalej pracuje</label>
                        </CurrentlyWorkingContainer>
                        <DatesContainer>
                            <DateContainer>
                                <p>Rozpocz??cie pracy</p>
                                <DatePicker className='date-picker' selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                            </DateContainer>
                            <DateContainer>
                                <p>Zako??czenie pracy</p>
                                <DatePicker disabled={currentlyWorking} className='date-picker' selected={endDate} onChange={(date:Date) => setEndDate(date)} />
                            </DateContainer>
                        </DatesContainer>
                        <ButtonContainer>
                            <SubmitButton onClick={() => onSubmit()}>Stw??rz</SubmitButton>
                        </ButtonContainer>
                    </AllInputsContainer>
                </>
            )}



        </Container>
    )
}