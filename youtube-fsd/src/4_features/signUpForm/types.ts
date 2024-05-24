export type SignUpValue = {
    id: string;
    pw: string;
    pwCheck: string;
    name: string;
}

export type SignUpFormProps = {
    id: string;
    pw: string;
    name: string;
}

export type UseSignUpSignature = (url: string)=> [(data: SignUpFormProps) => Promise<void>]

export type SignUpFetchSignature = (data: SignUpFormProps) => Promise<void>;

