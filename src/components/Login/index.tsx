import axios from "axios";
import {useContext, useState} from "react";
import {UserContext} from "../../context/LoginContext";


export const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e: any) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/User/login', {
            email: login,
            password: password
        }, {withCredentials: true});

        //@ts-ignore
        setUser(login);
    }

    const onLoginChange = (e: any) => {
        const { value } = e.target;

        setLogin(value);
    }

    const onPasswordChange = (e: any) => {
        const { value } = e.target;

        setPassword(value);
    }
    return (
        <form onSubmit={(e) => onLogin(e)}>
            <input placeholder='Email' onChange={(e: any) => onLoginChange(e)}/>
            <input type='password' placeholder='Password' onChange={(e: any) => onPasswordChange(e)} />
            <button>Zaloguj</button>
        </form>
    )
}