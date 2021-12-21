import { Container, Title, Rating, RatingNumber, Tags, Tag } from "./style";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ICompanyPreview } from "../../common/interfaces/CompanyPreview.interface";

interface IProps {
    company: ICompanyPreview,
}

export const CompanyCard: React.FC<IProps> = ({company}) => {
    const tagsDisplayed = company.tags.slice(0, 3);
    const numberTag = company.tags.length > 3 ? company.tags.length - 3 : null;

    return (
        <Link to={`/company/${company.name}`}>
            <Container>
                <Title>{company.name}</Title>
                <Rating>
                    <FontAwesomeIcon icon={faStar}/>
                    <p>{company.rating > 0 ? `${company.rating} / 5` : 'brak'}</p>
                    <RatingNumber>{company.reviewCount} recenzji</RatingNumber>
                </Rating>
                <Tags>
                    {company.tags.map(tag => (
                        <Tag>{tag}</Tag>
                    ))}
                    {numberTag ? <Tag>numberTag</Tag> : null}
                </Tags>
            </Container>
        </Link>
    )


}