import axios from "axios";

export const Login = () => {
    const onLogin = async (e: any) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/User/login', {
            email: 'idlesoluszyn@gmail.com',
            password: 'CBDUM123!@#yt'
        }, {withCredentials: true})
        console.log(res);
        console.log('logged in...')
    }
    return (
        <form onSubmit={(e) => onLogin(e)}>
            <input />
            <input />
            <button>Zaloguj</button>
        </form>
    )
}