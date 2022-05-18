import {useParams} from "react-router-dom";
import { Container, SingleInputContainer, Input, TagAndScoreContainer, AllInputsContainer,
    Select, TextArea, DatesContainer, DateContainer, SubmitButton, ButtonContainer, CurrentlyWorkingContainer } from './../style';
import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Spinner from "../../Spinner";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { RatingStar } from "rating-star";
import { IReview } from "../../../common/interfaces/Review.interface";
import { useLocation } from 'react-router-dom'


interface InputData {
    position: string;
    rating: string;
    comment: string;
    tag: string;
    IsStillWorking: boolean;
}

type LocationState = { review: IReview; };


export const ReviewsEditForm = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const location = useLocation()
    const { review } = location.state as LocationState

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [rating, setRating] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [input, setInput] = useState<InputData>({
        position: review ? review.position : '',
        rating: review ? String(review.rating) : '',
        comment: review ? String(review.comment) : '',
        tag: review ? review.tag : '',
        IsStillWorking: review ? review.isStillWorking : false,
    });


    const notify = (msg: string) => toast(msg, {position: "bottom-right"})

    const handleChange = (event: any) => {
        console.log("XD");
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:5000/api/Tags');
            const data: string[] = res.data;

            setTags(data);
        })()
    }, [])

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
                const x = await axios.put(`http://localhost:5000/api/Reviews/${review.id}/`, dataToSend, {withCredentials: true});
                notify("Edytowano recenzję!");
                navigate(`/company/${name}`, { replace: true });
            } catch(e: any) {
                console.log(e.response);
                notify(e.response.data);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        } else {
            notify("Błąd w podanych danych");
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
                    <h2 style={{textAlign: 'center'}}>Edytuj swoją recenzję dla {name}</h2>
                    <AllInputsContainer>
                        <SingleInputContainer>
                            <p>Stanowisko</p>
                            <Input placeholder='eg. Intern' onChange={handleChange} name="position" autoComplete='off' disabled value={input.position}/>
                        </SingleInputContainer>
                        <TagAndScoreContainer>
                            <div>
                                <p style={{textAlign: 'center'}}>Technologia</p>
                                <Select onChange={handleChange} name="tag" disabled>
                                    {tags.map(tag => (
                                        <option key={tag} selected={tag === input.tag}>{tag}</option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <p style={{textAlign: 'center'}}>Ocena</p>
                                <RatingStar
                                    maxScore={5}
                                    id="123"
                                    rating={Number(input.rating)}
                                />
                            </div>
                        </TagAndScoreContainer>
                        <SingleInputContainer>
                            <p>Komentarz</p>
                            <TextArea placeholder='Co sądzisz o firmie?' onChange={handleChange} name="comment" value={input.comment}/>
                        </SingleInputContainer>
                        <CurrentlyWorkingContainer>
                            <input disabled type='checkbox' id='currentlyWorking' onChange={() => setCurrentlyWorking(!currentlyWorking)} checked={input.IsStillWorking}/>
                            <label htmlFor='currentlyWorking'>Dalej pracuje</label>
                        </CurrentlyWorkingContainer>
                        <DatesContainer>
                            <DateContainer>
                                <p>Rozpoczęcie pracy</p>
                                <DatePicker className='date-picker' selected={startDate} onChange={(date:Date) => setStartDate(date)} disabled/>
                            </DateContainer>
                            <DateContainer>
                                <p>Zakończenie pracy</p>
                                <DatePicker className='date-picker' selected={endDate} onChange={(date:Date) => setEndDate(date)} disabled />
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