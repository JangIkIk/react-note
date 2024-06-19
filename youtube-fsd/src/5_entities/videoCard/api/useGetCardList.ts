import React, { useEffect, useState } from "react";
import { useFetch } from "@shared/lib";
import type { VideoListProps } from "../types";


export const useGetCardList = ()=>{
    const [baseFetch] = useFetch();
    const [errorStatus, setErrorStatus] = useState<number>(0);
    const [cardList, setCardList] = useState<VideoListProps[] | null>(null);
    const getCardListFetch = async()=>{
        try{
            // const response = await baseFetch("video/all");
            // if(!response.ok){
            //     setErrorStatus(response.status);
            //     return;
            // }
            // const jsonData:VideoListProps[] = await response.json();
            // setCardList(jsonData);     
        }
        catch(error){
            if(error instanceof Error) console.log(error);
        }
    }

    useEffect(()=>{
        getCardListFetch();
        if(errorStatus === 400) console.log("query오류");
        if(errorStatus === 500) console.log("서버에러");
    },[errorStatus])

    return [cardList];
}