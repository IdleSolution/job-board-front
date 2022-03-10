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
    var DateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    }
    // @ts-ignore
    const f = review.from ? new window.Date(review.from).toLocaleString('pl-PL', DateOptions) : null;
    // @ts-ignore
    const t = review.to ? new window.Date(review.to).toLocaleString('pl-PL', DateOptions) : null;
    const workPeriodFormat = t || f ? String("Od: " + f + ' do: ' + t) : null;
    return (
        <Container>
            <Content>
                <WorkPeriod>{workPeriodFormat}</WorkPeriod>
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