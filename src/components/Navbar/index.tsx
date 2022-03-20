import { Container, UserButtons, UserButton } from './style'
import { faBuilding, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export const Navbar = () => (
    <div>
        <Container>
            <Link to='/'><h1>Staże Dla Studentów</h1></Link>
            <UserButtons>
                <UserButton>Zaloguj</UserButton>
                <UserButton>Zarejestruj</UserButton>
            </UserButtons>
        </Container>
        {/*<NavigationContainer>*/}
        {/*    <NavigationGroup>*/}
        {/*        <SingleNavigationActive>*/}
        {/*            <FontAwesomeIcon icon={faBuilding}/>*/}
        {/*            <Link to='/'><p>Firmy</p></Link>*/}
        {/*        </SingleNavigationActive>*/}

        {/*        <SingleNavigation>*/}
        {/*            <FontAwesomeIcon icon={faStickyNote}/>*/}
        {/*            <p>Pytania Rekrutacyjne</p>*/}
        {/*        </SingleNavigation>*/}

        {/*    </NavigationGroup>*/}
        {/*    /!*<ButtonCreateReview>Stwórz nową recenzje</ButtonCreateReview>*!/*/}
        {/*    <div />*/}
        {/*</NavigationContainer>*/}
    </div>

)