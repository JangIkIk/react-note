export const useDeleteLogout = () => {

    const handleLogout = () => {
        document.cookie = "key=; Max-Age=-1; path=/;";
        window.location.href = "/";
    }

    return handleLogout;
}