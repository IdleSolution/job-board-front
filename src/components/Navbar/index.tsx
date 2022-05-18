import { Container, UserButtons, UserButton, UserOptions } from './style'
import { Link } from 'react-router-dom';
import {useContext, useState} from "react";
import {UserContext} from "../../context/LoginContext";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {toast} from "react-toastify";


export const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    const [showUserOptions, setShowUserOptions] = useState(false);

    const onLogout = async () => {
        await axios.get('http://localhost:5000/api/User/logout', {withCredentials: true});

        //@ts-ignore
        setUser(null);
        setShowUserOptions(false);
        notify('Wylogowano!');
    }

    const notify = (msg: string) => toast(msg, {position: "bottom-right"})

    return (
            <Container>
                <Link to='/'><h1>Staże Dla Studentów</h1></Link>
                {user ? (
                    <UserButtons style={{alignItems: 'center', color: '#fff', width: '15%', cursor: 'pointer'}} onClick={() => setShowUserOptions(!showUserOptions)}>
                        <p style={{color: '#fff', width: '100%'}}>Witaj {user}!</p>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </UserButtons>
                ) : (
                    <UserButtons>
                        <Link to='/login'><UserButton>Zaloguj</UserButton></Link>
                        <Link to='/register'><UserButton >Zarejestruj</UserButton></Link>
                    </UserButtons>
                )}
                <UserOptions style={showUserOptions ? {transform: 'translateY(100%)', zIndex: '100', transition: 'z-index .5s step-end, transform .5s'} : {transform: 'translateY(0)', zIndex: '-1',  transition: 'z-index .5s step-start, transform .5s'}}>
                    <Link to={`/profile/${user}`}><div>
                        <p>Profil</p>
                    </div></Link>
                    <div onClick={() => onLogout()}>
                        <p>Wyloguj</p>
                    </div>
                </UserOptions>

            </Container>
    )

}