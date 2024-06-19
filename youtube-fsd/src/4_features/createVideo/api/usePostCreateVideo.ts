import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useFetch } from "@shared/lib";
import type { UsePostCreateVideo, VideoData, PostCreateVideo} from "../types";

export const usePostCreateVideo:UsePostCreateVideo = ()=>{
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [videoData, setVideoData] = useState<VideoData>(null);
    const [cookie] = useCookies(["accessToken"]);
    const postCreateVideo:PostCreateVideo = async( props, onClose ) => {
        try{
            // const formData = new FormData();
            // for(const key in props){
            //     formData.append(key, props[key]);
            // }
            // const response = await baseFetch("video",{method:"POST", headers: null, data:formData}, cookie.accessToken);
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // }
            // const jsonData:VideoData = await response.json();
            // setVideoData(jsonData);
            // if(onClose){
            //     onClose();
            // }
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }
    useEffect(()=>{
        if(errorStatus === 400) console.log("형식오류");
        if(errorStatus === 401) console.log("인증오류");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])

    return [postCreateVideo,videoData];
}