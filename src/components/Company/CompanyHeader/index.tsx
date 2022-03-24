import { Container, Navbar, NavbarItem, NavbarItemActive, RatingContainer, Section, NameRating, ButtonsContainer, Button } from "./style"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICompanyPreview } from "../../../common/interfaces/CompanyPreview.interface";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../../context/LoginContext";

interface IProps {
    company: ICompanyPreview,
    setPage: (x: any) => any,
}

export const CompanyHeader: React.FC<IProps> = ({company, setPage}) => {
    const [currentPage, setCurrentPage] = useState<'reviews' | 'interviews'>('reviews');
    const [user, setUser] = useContext(UserContext);

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
                        <FontAwesomeIcon icon={faStar} style={{marginRight: '.2rem', color: 'rgb(105, 131, 250)' }}/>
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
                        {user ? (
                            <ButtonsContainer>
                                <Button><Link to={`/company/${company.name}/review`}>Stwórz recenzję</Link></Button>
                                <Button><Link to={`/company/${company.name}/interview`}>Stwórz Pytania</Link></Button>
                            </ButtonsContainer>
                        ) : null}
                </Navbar>
            </Section>

        </Container>
    )

}
