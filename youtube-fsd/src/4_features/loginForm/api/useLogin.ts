import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"; 
import { useCookies } from "react-cookie";
import type { useLoginSignature, LoginFetchSignature } from "../types";

/*
[고민]
1. useFetch를 만들어 postFetch를 간소화해보자
2. loading, error의 state를 return하지 않아도 될까?
3. useEffect에 처리되는 에러부분 상태에 맞게 처리
* error를 처리할때 어떤방법이 효율적일지?
*/

export const useLogin:useLoginSignature = (url)=>{
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [_, setCookie] = useCookies(['accessToken']);
    const navigate = useNavigate();

    const loginFetch: LoginFetchSignature = async(data)=>{
        try{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                setErrorStatus(response.status);
                return;
            }
            
            const jsonData = await response.json();
            setCookie("accessToken", jsonData.accessToken);
            navigate("/");
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        if(errorStatus === 400){
            console.log("형식오류");
        }
        if(errorStatus === 401){
            console.log("계정정보 오류");
        }
        if(errorStatus === 500){
            console.log("서버에러");
        }
    },[errorStatus])
    
    return [loginFetch]
}