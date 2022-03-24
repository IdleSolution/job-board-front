import axios from "axios";
import {useContext, useState} from "react";
import {UserContext} from "../../context/LoginContext";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import { Container, Form } from './style';
import {Input, SubmitButton} from "../ReviewsForm/style";

export const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const [input, setInput] = useState({login: '', password: ''});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const onChange = (e: any) => {
        const { value, name } = e.target;

        setInput(values => ({...values, [name]: value}))
    }

    const notify = (msg: string) => toast(msg, {position: "bottom-right"})


    const onLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/User/login', {
                email: input.login,
                password: input.password
            }, {withCredentials: true});

            //@ts-ignore
            setUser(input.login);
            notify("Zalogowano!");
            navigate(`/`, { replace: true });

        } catch(e: any) {
            console.log(e);
            notify("Coś poszło nie tak - sprawdź czy wprowadziłeś poprawne dane");
        } finally {
            setLoading(false);
        }

    }

    return (
        <Container>
            <Form onSubmit={(e) => onLogin(e)}>
                <h2 style={{marginBottom: '2rem'}}>Zaloguj</h2>
                <Input style={{width: '60%', marginBottom: '2rem'}} autoComplete='off' name='login' placeholder='Email' onChange={(e: any) => onChange(e)}/>
                <Input style={{width: '60%', marginBottom: '4rem'}} autoComplete='off' name='password' type='password' placeholder='Hasło' onChange={(e: any) => onChange(e)} />
                <SubmitButton onClick={(e) => onLogin(e)}>Zaloguj</SubmitButton>
            </Form>
        </Container>

    )
}