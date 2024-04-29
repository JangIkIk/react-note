export const useLogin = () => {
    
    const handleLogin = () => {
        document.cookie = "key=value";
        window.location.href = "/";
    }

    return handleLogin;
}