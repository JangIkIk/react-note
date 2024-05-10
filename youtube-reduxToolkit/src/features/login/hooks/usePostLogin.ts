export const usePostLogin = () => {
    
    const handleLogin = () => {
        document.cookie = "key=value";
        window.location.href = "/";
    }

    return handleLogin;
}