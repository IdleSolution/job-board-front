import { Container, NavigationContainer, NavigationGroup, SingleNavigation, SingleNavigationActive, ButtonCreateReview } from './style'
import { faBuilding, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => (
    <div>
        <Container>
            <p>Staże Dla Studentów</p>
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