import { Container, Title, Rating, RatingNumber, Tags, Tag } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CompanyCard = () => (
    <Container>
        <Title>Miquido</Title>
        <Rating>
            <FontAwesomeIcon icon={faStar}/>
            <p>4.56 / 5</p>
            <RatingNumber>101 recenzji</RatingNumber>
        </Rating>
        <Tags>
            <Tag>Node.js</Tag>
            <Tag>Javascript</Tag>
            <Tag>React</Tag>
            <Tag>+5</Tag>
        </Tags>
    </Container>
)