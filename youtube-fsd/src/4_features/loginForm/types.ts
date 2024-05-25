export type LoginVlaue = {
    id: string;
    pw: string;
}

export type LoginFetch = (data: LoginVlaue) => void;
export type UseLogin = ()=> [LoginFetch];
