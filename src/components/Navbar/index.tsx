import { Container, UserButtons, UserButton } from './style'
import { faBuilding, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {useContext} from "react";
import {UserContext} from "../../context/LoginContext";

export const Navbar = () => {
    const [user] = useContext(UserContext);

    return (
        <div>
            <Container>
                <Link to='/'><h1>Staże Dla Studentów</h1></Link>
                {user ? (
                    <p>Hello {user}</p>
                ) : (
                    <UserButtons>
                        <Link to='/login'><UserButton>Zaloguj</UserButton></Link>
                        <UserButton>Zarejestruj</UserButton>
                    </UserButtons>
                )}
            </Container>
        </div>
    )

}