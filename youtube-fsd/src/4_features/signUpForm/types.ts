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

export type SignUpFetch = (data: SignUpFormProps) => void;
export type UseSignUp = ()=> [SignUpFetch];


