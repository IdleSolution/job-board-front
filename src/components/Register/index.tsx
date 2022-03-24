import axios from "axios";
import {useContext, useState} from "react";
import {UserContext} from "../../context/LoginContext";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import { Container, Form } from '../Login/style';
import {Input, SubmitButton} from "../ReviewsForm/style";

export const Register = () => {
    const [user, setUser] = useContext(UserContext);
    const [input, setInput] = useState({login: '', password: '', retypedPassword: ''});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const onChange = (e: any) => {
        const { value, name } = e.target;

        setInput(values => ({...values, [name]: value}))
    }

    const notify = (msg: string) => toast(msg, {position: "bottom-right"})


    const onRegister = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        if(input.password !== input.retypedPassword) {
            notify("Hasła nie są identyczne");
        } else {
            try {
                await axios.post('http://localhost:5000/api/User/register', {
                    email: input.login,
                    password: input.password
                }, {withCredentials: true});

                //@ts-ignore
                setUser(input.login);
                notify("Zarejestrowano i zalogowano!");
                navigate(`/`, { replace: true });

            } catch(e: any) {
                notify("Coś poszło nie tak - sprawdź czy wprowadziłeś poprawne dane");
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => onRegister(e)}>
                <h2 style={{marginBottom: '2rem'}}>Zarejestruj</h2>
                <Input style={{width: '60%', marginBottom: '2rem'}} autoComplete='off' name='login' placeholder='Email' onChange={(e: any) => onChange(e)}/>
                <Input style={{width: '60%', marginBottom: '2rem'}} autoComplete='off' name='password' type='password' placeholder='Hasło' onChange={(e: any) => onChange(e)} />
                <Input style={{width: '60%', marginBottom: '4rem'}} autoComplete='off' name='retypedPassword' type='password' placeholder='Powtórz hasło' onChange={(e: any) => onChange(e)} />
                <SubmitButton onClick={(e) => onRegister(e)}>Zarejestruj</SubmitButton>
            </Form>
        </Container>
    )
}