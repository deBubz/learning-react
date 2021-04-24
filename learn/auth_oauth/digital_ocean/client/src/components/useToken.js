import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        setToken(token.token);
    };

    return { setToken: saveToken, token };
}
