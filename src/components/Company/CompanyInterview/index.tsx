import { Container, RatingContainer, NameRating, Content, WorkPeriod, Date, Description, Line } from "./style";
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
    <>
        <Container>
            <Content>
                <NameRating>
                    <h2>{interview.position}</h2>
                    <RatingContainer>
                        <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
                        <p>Trudność: {interview.difficulty} / 5</p>
                    </RatingContainer>
                </NameRating>
                <Description>{interview.comment}</Description>
                <Date>{d}</Date>
            </Content>
        </Container>
        <Line />
    </>
    )
}
