import React, {Dispatch, SetStateAction, useState} from 'react';
export const UserContext = React.createContext<(string | Dispatch<SetStateAction<string>>)[]>([]);

interface IProps {
    subPages: any;
}


const LoginContext: React.FC<IProps> = ({ subPages }) => {
    const [user, setUser] = useState('');
    return (
        <UserContext.Provider value={[user, setUser]}>
            {subPages}
        </UserContext.Provider>
    )
}
export default LoginContext;