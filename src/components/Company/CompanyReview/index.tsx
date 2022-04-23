import { Container, RatingContainer, NameRating, Content, WorkPeriod, FooterContainer, Description, OwnActions } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IReview } from "../../../common/interfaces/Review.interface";
import {Line} from "../CompanyInterview/style";
import {DateTime} from 'luxon'
import { Tag } from "../../CompanyCard/style";
import {Comments} from "../Comments";
import {useContext} from "react";
import {UserContext} from "../../../context/LoginContext";

interface IProps {
    review: IReview,
    removeReview: (id: number) => void;
}

export const CompanyReview: React.FC<IProps> = ({review, removeReview}) => {
    // @ts-ignore
    let d = DateTime.fromISO(review.issued).setLocale('pl').toFormat('dd MMMM yyyy')
    const period = review.isStillWorking ? 'Dalej pracuje' : ((review.from && review.to) ?
        `Czas pracy: ${DateTime.fromISO(review.from).setLocale('pl').toFormat('dd MMMM yyyy')} - 
        ${DateTime.fromISO(review.to).setLocale('pl').toFormat('dd MMMM yyyy')}` : null);

    const [user, setUser] = useContext(UserContext);
    let own = null;
    if(user === review.creatorEmail) {
        own = <OwnActions>
                <p onClick={() => removeReview(review.id)}>Usuń</p>
                <p>Edytuj</p>
            </OwnActions>
    }
    return (
        <>
            <Container>
                <Content>
                    <WorkPeriod>{period}</WorkPeriod>
                    <NameRating>
                        <h2>{review.position}</h2>
                        <RatingContainer>
                            <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
                            <p style={{marginRight: '.4rem'}}>{review.rating} / 5</p>
                            <Tag>{review.tag}</Tag>
                        </RatingContainer>
                    </NameRating>
                    <Description>{review.comment}</Description>
                    <FooterContainer>
                        <p>{d}</p>
                        {user === review.creatorEmail && (
                            <OwnActions>
                                <p onClick={() => removeReview(review.id)}>Usuń</p>
                                <p>Edytuj</p>
                            </OwnActions>
                        )}
                    </FooterContainer>
                </Content>
                <Comments id={review.id} type={'review'}/>
            </Container>
            <Line />
        </>

)

}