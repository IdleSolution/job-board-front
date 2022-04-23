import { Container, RatingContainer, NameRating, Content, WorkPeriod, Date, Description, Line } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IInterview } from "../../../common/interfaces/Interview.interface";
import { DateTime } from 'luxon';
import { Tag } from "../../CompanyCard/style";
import {Comments} from "../Comments";

interface IProps {
    interview: IInterview,
}

export const CompanyInterview: React.FC<IProps> = ({interview}) => {
    // @ts-ignore
    let d = DateTime.fromISO(interview.issued).setLocale('pl').toFormat('dd MMMM yyyy')

    return (
    <>
        <Container>
            <Content>
                <NameRating>
                    <h2>{interview.position}</h2>
                    <RatingContainer>
                        <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
                        <p style={{marginRight: '.4rem'}}> Trudność: {interview.difficulty} / 5</p>
                        <Tag>{interview.tag}</Tag>
                    </RatingContainer>
                </NameRating>
                <Description>{interview.comment}</Description>
                <Date>{d}</Date>
            </Content>
            <Comments id={interview.id} type={'interview'}/>

        </Container>
        <Line />
    </>
    )
}
