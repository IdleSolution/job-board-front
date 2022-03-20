import { Container, RatingContainer, NameRating, Content, WorkPeriod, Date, Description } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IReview } from "../../../common/interfaces/Review.interface";
import {Line} from "../CompanyInterview/style";
import {DateTime} from 'luxon'

interface IProps {
    review: IReview
}

export const CompanyReview: React.FC<IProps> = ({review}) => {
    // @ts-ignore

    let d = DateTime.fromISO(review.issued).setLocale('pl').toFormat('dd MMMM yyyy')
    const period = review.isStillWorking ? 'Dalej pracuje' : ((review.from && review.to) ?
        `Czas pracy: ${DateTime.fromISO(review.from).setLocale('pl').toFormat('dd MMMM yyyy')} - 
        ${DateTime.fromISO(review.to).setLocale('pl').toFormat('dd MMMM yyyy')}` : null);

    return (
        <>
            <Container>
                <Content>
                    <WorkPeriod>{period}</WorkPeriod>
                    <NameRating>
                        <h2>{review.position}</h2>
                        <RatingContainer>
                            <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
                            <p>{review.rating} / 5</p>
                        </RatingContainer>
                    </NameRating>
                    <Description>{review.comment}</Description>
                    <Date>{d}</Date>
                </Content>
            </Container>
            <Line />
        </>

)

}