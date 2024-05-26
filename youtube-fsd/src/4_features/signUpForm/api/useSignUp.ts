import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type {SignUpFetch, UseSignUp} from "../types";
import { useFetch } from "@shared/lib";

/*
[고민]
1. useFetch를 만들어 postFetch를 간소화해보자
2. loading, error의 state를 return하지 않아도 될까?
3. useEffect에 처리되는 에러부분 상태에 맞게 처리
* error를 처리할때 어떤방법이 효율적일지?
*/

export const useSignUp:UseSignUp = ()=>{
    const navigate = useNavigate();
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);

    const signUpFetch:SignUpFetch = async ( data ) => {
        try{
            const response = await baseFetch("channel",{method:"POST",data});
            if(!response.ok){
                setErrorStatus(response.status);
                return;
            };
            navigate("/login");
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }            
    }
    useEffect(()=>{
        if(errorStatus === 400){
            console.log("형식오류");
        }
        if(errorStatus === 409){
            console.log("존재하는 회원");
        }
        if(errorStatus === 500){
            console.log("서버에러");
        }
    },[errorStatus])

    return [signUpFetch];
}