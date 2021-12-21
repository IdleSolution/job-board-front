import { ICompanyPreview } from "../../common/interfaces/CompanyPreview.interface";
import { CompanyCard } from "../CompanyCard";
import { Container } from "./style";

interface IProps {
    companies: ICompanyPreview[],
}

export const CompanyCards: React.FC<IProps> = ({companies}) => (
    <Container>
        {companies.map(company => (
            <CompanyCard company={company}/>
        ))}
    </Container>
)