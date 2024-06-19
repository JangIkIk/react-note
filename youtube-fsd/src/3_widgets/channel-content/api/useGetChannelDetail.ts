import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { useCookies } from "react-cookie";
import type { ChannelDetailInfo } from "../types";
import { useFetch } from "@shared/lib";


export const useGetChannelDetail = ()=>{
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [channelDetailInfo, setChannelDetailInfo] = useState<ChannelDetailInfo>(null);
    const {channelidx} = useParams();
    const [cookie] = useCookies(["accessToken"]);
    

    const getChannelDetaillFetch = async()=>{
        try{
            // const response = await baseFetch(`channel/${channelidx}`,{},cookie.accessToken);
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // }

            // const jsonData:ChannelDetailInfo = await response.json();
            // setChannelDetailInfo(jsonData);
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        getChannelDetaillFetch();
        if(errorStatus === 400) console.log("idx오류");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])

    return [channelDetailInfo];
}