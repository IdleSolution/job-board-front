import { Container, RatingContainer, NameRating, Content, WorkPeriod, Date, Description } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IInterview } from "../../../common/interfaces/Interview.interface";

interface IProps {
    interview: IInterview,
}

export const CompanyInterview: React.FC<IProps> = ({interview}) => {
    // @ts-ignore
    const d = new window.Date(interview.issued).toDateString();

    return (
    <Container>
        <Content>
            <NameRating>
                <h2>{interview.position}</h2>
                <RatingContainer>
                    <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem' }}/>
                    <p>Difficulty: {interview.difficulty} / 5</p>
                </RatingContainer>
            </NameRating>
            <Description>{interview.comment}</Description>
            <Date>{d}</Date>
        </Content>
    </Container>
    )
}
