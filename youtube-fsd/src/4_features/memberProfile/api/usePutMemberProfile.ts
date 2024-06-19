import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useFetch } from "@shared/lib";
import { useUserStore } from "@shared/lib";

export const usePutMemberProfile = ()=>{
    const [baseFetch] = useFetch();
    const [cookie] = useCookies(["accessToken"]); 
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const removeMember = useUserStore( state => state.removeMember);

    const putMemberProfile = async(file: File)=>{
        try{
            // const formData = new FormData();
            // formData.append("file", file);

            // const response = await baseFetch("channel/profile-img",{method: "PUT", headers: null, data: formData},cookie.accessToken);
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // };
            // removeMember();
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    };

    useEffect(()=>{
        if(errorStatus === 401) console.log("인증실패");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])

    return [putMemberProfile];
}