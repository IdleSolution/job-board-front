import axios from "axios";
import {useState} from "react";

export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const onLogin = async (e: any) => {
        e.preventDefault();
        console.log(login);
        console.log(password);
        const res = await axios.post('http://localhost:5000/api/User/login', {
            email: login,
            password: password
        }, {withCredentials: true})
        console.log(res);
        console.log('logged in...')
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