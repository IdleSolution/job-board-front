// @ts-nocheck
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/LoginContext";
import { Container, PostsContainer, UserCardContainer } from "./style";
import {IInterview} from "../../common/interfaces/Interview.interface";
import {IReview} from "../../common/interfaces/Review.interface";
import {IComment} from "../../common/interfaces/Comment.interface";
import axios from "axios";
import { InterviewContainer, Content, WorkPeriod, NameRating, RatingContainer, Description, FooterContainer, Tag, OwnActions  } from './style'
import {Line} from "./../Company/CompanyInterview/style";
import {Comments} from "../Company/Comments";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    const [interviews, setInterviews] = useState<IInterview[]>([]);
    const [reviews, setReviews] = useState<IReview[]>([]);
    const [comments, setComments] = useState<IComment[]>([]); 
    const [allData, setAllData] = useState<(IReview | IComment | IInterview)[]>()

    useEffect(() => {
        (async () => {
            const reviews = await axios.get(`http://localhost:5000/api/reviews/user/${user}`);
            setReviews(reviews.data);

            const interviews = await axios.get(`http://localhost:5000/api/interviews/user/${user}`);
            setReviews(interviews.data);

            const interviewsComments = await axios.get(`http://localhost:5000/api/InterviewsComments/user/${user}`);
            const reviewsComments = await axios.get(`http://localhost:5000/api/ReviewsComments/user/${user}`);

            setComments([...interviewsComments.data, ...reviewsComments.data]);

            const bothComments = [...interviewsComments.data, ...reviewsComments.data]

            const newReviews = reviews.data.map((review: IReview) => ({...review, type: 'review'}));
            const newInterviews = interviews.data.map((interview: IInterview) => ({...interview, type: 'interview'}));
            const newComments = bothComments.map((comment: IComment) => ({...comment, type: 'comment'}));

            const allData: (IReview | IInterview | IComment)[] = [...newReviews, ...newInterviews, ...newComments];

            allData.sort((a, b) => {
                return new Date(b.issued).getTime() - new Date(a.issued).getTime();
            });

            setAllData(allData);
        })();
    }, [])

    let show: any = [];

    if(allData && interviews && reviews && comments) {
        allData.map(data => {
            console.log(data);
            if(data.type === 'interview') {
                console.log(data);
                show.push(
                    <>
                        <InterviewContainer>
                            <Content>
                                <p>Użytkownik opisał rekrutację</p>
                                <NameRating>
                                    <h2>{data.position}</h2>
                                    <RatingContainer>
                                        <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
                                        <p style={{marginRight: '.4rem'}}>{data.difficulty} / 5</p>
                                        <Tag>{data.tag}</Tag>
                                    </RatingContainer>
                                </NameRating>
                                <Description>{data.comment}</Description>
                            </Content>
                        </InterviewContainer>
                </>
                )
            } else if(data.type === 'review') {
                show.push(
                    <>
                    <InterviewContainer>
                        <Content>
                            <p>Użytkownik napisał recenzję</p>
                            <NameRating>
                                <h2>{data.position}</h2>
                                <RatingContainer>
                                    <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
                                    <p style={{marginRight: '.4rem'}}>{data.rating} / 5</p>
                                    <Tag>{data.tag}</Tag>
                                </RatingContainer>
                            </NameRating>
                            <Description>{data.comment}</Description>
                        </Content>
                    </InterviewContainer>
            </>
                )
            } else {
                show.push(
                    <InterviewContainer>
                        <Content>
                            <p>Użytkownik napisał komentarz</p>
                            <Description style={{fontSize: '1rem', marginTop: '2rem'}}>{data.message}</Description>
                        </Content>
                    </InterviewContainer>
                )
            }
        })
    } else {
        show = null;
    }


    return (
        <Container>
            <PostsContainer>
                {show}
            </PostsContainer>
            <UserCardContainer>
                Profil użytkownika {user}
            </UserCardContainer>
        </Container>
    )
}