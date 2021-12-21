import { Container, RatingContainer, NameRating, Content, WorkPeriod, Date, Description } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IReview } from "../../../common/interfaces/Review.interface";

interface IProps {
    review: IReview
}

export const CompanyReview: React.FC<IProps> = ({review}) => {
    // @ts-ignore
    const d = new window.Date(review.issued).toDateString();
    return (
        <Container>
            <Content>
                <WorkPeriod>Currently working</WorkPeriod>
                <NameRating>
                    <h2>{review.position}</h2>
                    <RatingContainer>
                        <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem' }}/>
                        <p>{review.rating} / 5</p>
                    </RatingContainer>
                </NameRating>
                <Description>{review.comment}</Description>
                <Date>{d}</Date>
            </Content>
        </Container>
    )

}