export type LoginVlaue = {
    id: string;
    pw: string;
}

export type useLoginSignature = (url: string)=> [(data:LoginVlaue) => Promise<void>];
export type LoginFetchSignature = (data: LoginVlaue) => Promise<void>;
