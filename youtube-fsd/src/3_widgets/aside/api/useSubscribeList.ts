import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import type { SubscribeList, GetSubscribeList, UseSubscribeList } from "../types";
import { useFetch } from "@shared/lib";
import { useUserStore } from "@shared/lib/store/useUserStore";


export const useSubscribeList:UseSubscribeList = ()=>{
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [subscribeList, setSubscribeList] = useState<SubscribeList>(null);
    const [cookie] = useCookies(["accessToken"]);
    const subscribe = useUserStore( state=> state.subscribe);
    
    const getSubscribeList:GetSubscribeList = async()=>{
        try{
            // const response = await baseFetch("channel/subscribe/all",{},cookie.accessToken);
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // }
            // const jsonData:SubscribeList = await response.json();
            // setSubscribeList(jsonData);

        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        getSubscribeList();
        if(errorStatus === 401) console.log("인증실패");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus,subscribe])

    return [subscribeList];
}