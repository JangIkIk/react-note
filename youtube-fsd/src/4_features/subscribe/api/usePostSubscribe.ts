import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useFetch } from "@shared/lib";
import { useUserStore } from "@shared/lib/store/useUserStore";


export const usePostSubscribe = ()=>{
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [cookie] = useCookies(["accessToken"]);
    const setSubscribe = useUserStore( state => state.isSubscribe);

    const PostSubscribe = async(userIdx: number, setIsSubscribe: React.Dispatch<React.SetStateAction<boolean>>)=>{
        try{
            // const response = await baseFetch(`channel/${userIdx}/subscribe`,{method: "POST"},cookie.accessToken);
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // }
            // setIsSubscribe(true);
            // setSubscribe();
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        if(errorStatus === 400) console.log("idx오류");
        if(errorStatus === 401) console.log("token오류");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])
    
    return [PostSubscribe];
}