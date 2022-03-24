import {useContext} from "react";
import {UserContext} from "../context/LoginContext";
import {Login} from "../components/Login";

interface IProps {
    component: any;
}

export const PrivateRoute: React.FC<IProps> = ({component}) => {
    const [user, setUser] = useContext(UserContext);

    if(!user) {
        return <Login />
    }

    return component;
}