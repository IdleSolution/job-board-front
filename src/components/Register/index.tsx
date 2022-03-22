import axios from "axios";
import {useState} from "react";

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onLogin = async (e: any) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        const res = await axios.post('http://localhost:5000/api/User/register', {
            email: email,
            password: password
        }, {withCredentials: true})
        console.log(res);
        console.log('register in...')
        if (res.status == 200) {
            // @ts-ignore
            window.location = 'http://localhost:3000';
        }
    }

    const onEmailChange = (e: any) => {
        const { value } = e.target;
        
        setEmail(value);
    }

    const onPasswordChange = (e: any) => {
        const { value } = e.target;

        setPassword(value);
    }
    return (
        <form onSubmit={(e) => onLogin(e)}>
            <input placeholder='Email' onChange={(e: any) => onEmailChange(e)}/>
            <input type='password' placeholder='Password' onChange={(e: any) => onPasswordChange(e)} />
            <button>Zarejestruj</button>
        </form>
    )
}