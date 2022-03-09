import { Container, Navbar, NavbarItem, NavbarItemActive, RatingContainer, Section, NameRating, ButtonsContainer, Button } from "./style"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICompanyPreview } from "../../../common/interfaces/CompanyPreview.interface";
import { useState } from "react";
import {Link} from "react-router-dom";

interface IProps {
    company: ICompanyPreview,
    setPage: (x: any) => any,
}

export const CompanyHeader: React.FC<IProps> = ({company, setPage}) => {
    const [currentPage, setCurrentPage] = useState<'reviews' | 'interviews'>('reviews');

    const clicked = (page: 'reviews' | 'interviews') => {
        setCurrentPage(page);
        setPage(page);
    }

    return (
        <Container>
            <Section>
                <NameRating>
                    <h1>{company.name}</h1>
                    <RatingContainer>
                        <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem' }}/>
                        <p>{company.rating > 0 ? `${company.rating.toFixed(2)} / 5` : 'brak'}</p>
                    </RatingContainer>
                </NameRating>
                <Navbar>
                        <NavbarItem active={currentPage === 'reviews'} onClick={() => clicked('reviews')}>
                            <p>{company.reviewCount}</p>
                            <p>Recenzji</p>
                        </NavbarItem>
                        <NavbarItem active={currentPage === 'interviews'} onClick={() => clicked('interviews')}>
                            <p>{company.interviewCount}</p>
                            <p>Pytań</p>
                        </NavbarItem>
                        <ButtonsContainer>
                            <Button><Link to={`/company/${company.name}/review`}>Stwórz recenzję</Link></Button>
                            <Button><Link to={`/company/${company.name}/interview`}>Stwórz Pytania</Link></Button>
                        </ButtonsContainer> 
                </Navbar>
            </Section>

        </Container>
    )

}
