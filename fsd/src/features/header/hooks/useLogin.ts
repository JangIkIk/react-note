import React, { useState } from "react";

const useLogin = (): {isCookie:boolean, login: React.MouseEventHandler, logout: React.MouseEventHandler} => {
    const [isCookie, setIsCookie] = useState<boolean>(false);

    const login: React.MouseEventHandler = () => {
        document.cookie = "key=value";
        setIsCookie(true);
    }

    const logout: React.MouseEventHandler = () => {
        document.cookie = "key=; Max-Age=-1; path=/;";
        setIsCookie(false);
    }

    return {isCookie, login, logout};
}

export default useLogin;
