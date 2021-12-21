import { Container, Navbar, NavbarItem, NavbarItemActive, RatingContainer, Section, NameRating, ButtonsContainer, Button } from "./style"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICompanyPreview } from "../../../common/interfaces/CompanyPreview.interface";
import { useState } from "react";

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
                        <p>{company.rating > 0 ? `${company.rating} / 5` : 'brak'}</p>
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
                            <Button>Stwórz recenzję</Button>
                            <Button>Stwórz Pytania</Button>
                        </ButtonsContainer> 
                </Navbar>
            </Section>

        </Container>
    )

}
