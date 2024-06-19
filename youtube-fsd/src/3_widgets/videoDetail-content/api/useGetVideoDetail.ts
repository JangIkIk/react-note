import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import type { VideoDetailInfo } from "../types";
import { useFetch } from "@shared/lib";


export const useGetVideoDetail = ()=>{
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [videoDetailInfo, setVideoDetailInfo] = useState<VideoDetailInfo>(null);
    const { videoidx } = useParams();
    
    const getVideoDetail = async()=>{
        try{
            // const response = await baseFetch(`video/${videoidx}`);
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // }
            
            // const jsonData:VideoDetailInfo = await response.json();
            // setVideoDetailInfo(jsonData);
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        getVideoDetail();
        if(errorStatus === 400) console.log("query 오류");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])

    return [videoDetailInfo];
}