import { Container, NavigationContainer, NavigationGroup, SingleNavigation, SingleNavigationActive, ButtonCreateReview } from './style'
import { faBuilding, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export const Navbar = () => (
    <div>
        <Container>
            <Link to='/'><p>Staże Dla Studentów</p></Link>
        </Container>
        <NavigationContainer>
            <NavigationGroup>
                <SingleNavigationActive>
                    <FontAwesomeIcon icon={faBuilding}/>
                    <p>Firmy</p>
                </SingleNavigationActive>

                <SingleNavigation>
                    <FontAwesomeIcon icon={faStickyNote}/>
                    <p>Pytania Rekrutacyjne</p>
                </SingleNavigation>

            </NavigationGroup>
            <ButtonCreateReview>Stwórz nową recenzje</ButtonCreateReview>
        </NavigationContainer>
    </div>

)