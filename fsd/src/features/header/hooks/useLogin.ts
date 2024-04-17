import React, { useState } from "react";

interface UseLogin{
    () : {isCookie: boolean, login: React.MouseEventHandler, logout: React.MouseEventHandler};
}

const useLogin: UseLogin = () => {
    const [isCookie, setIsCookie] = useState<boolean>(false);

    const login = () => {
        document.cookie = "key=value";
        setIsCookie(true);
    }

    const logout = () => {
        document.cookie = "key=; Max-Age=-1; path=/;";
        setIsCookie(false);
    }

    return {isCookie, login, logout};
}

export default useLogin;
