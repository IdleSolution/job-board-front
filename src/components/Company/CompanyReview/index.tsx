import { Container, RatingContainer, NameRating, Content, WorkPeriod, Date, Description } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IReview } from "../../../common/interfaces/Review.interface";
import {Line} from "../CompanyInterview/style";
import { Tag } from "../../CompanyCard/style";

interface IProps {
    review: IReview
}

export const CompanyReview: React.FC<IProps> = ({review}) => {
    // @ts-ignore
    const d = new window.Date(review.issued).toDateString();
    return (
        <>
            <Container>
                <Content>
                    <WorkPeriod>Currently working</WorkPeriod>
                    <NameRating>
                        <h2>{review.position}</h2>
                        <RatingContainer>
                            <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
                            <p style={{marginRight: '.4rem'}}>{review.rating} / 5</p>
                            <Tag>{review.tag}</Tag>
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