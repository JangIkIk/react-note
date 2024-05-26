import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useFetch } from "@shared/lib"


export const usePutMemberProfile = ()=>{
    const [baseFetch] = useFetch();
    const [cookie] = useCookies(["accessToken"]); 
    const [errorStatus, setErrorStatus] = useState<number>(0);


    const putMemberProfile = async(file: any)=>{
        try{
            
            const response = baseFetch("channel/profile-img",{},cookie.accessToken);
            
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    };

    useEffect(()=>{
        if(errorStatus === 401) console.log("인증실패");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])



    return;
}