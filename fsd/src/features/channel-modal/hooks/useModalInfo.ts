import React, {useEffect, useState} from "react";

const channelModalData = [
    {
        id: 1,
        channelLink: "https://www.youtube.com/@sss-lx5un",
        subscribe: 24000,
        videos: 176,
        totalView: 103918898,
        channelCreate: "2021-04-12",
        country: "대한민국"
    },
    {
        id: 2,
        channelLink: "https://www.youtube.com/@PsickUniv",
        subscribe: 31000000,
        videos: 14000,
        totalView: 19000000,
        channelCreate: "2019-04-01",
        country: "대한민국"
    },
    {
        id: 3,
        channelLink: "https://www.youtube.com/@everyj",
        subscribe: 15100,
        videos: 68,
        totalView: 6000000,
        channelCreate: "2014-7-23",
        country: "대한민국"
    },
    {
        id: 4,
        channelLink: "https://www.youtube.com/@ClimbTourTV",
        subscribe: 94900,
        videos: 277,
        totalView: 7000000,
        channelCreate: "2018-11-27",
        country: "대한민국"
    },
]
/*
    수정필요(type & function)
    모달창도 fetch를 해야하나?
*/ 
export const useModalInfo = ()=>{
    const [dataId, setDataId] = useState<string | null>(null)
    const [data, setData] = useState<any>(null);
    
    useEffect(()=>{
        if(dataId){
            const filterData = channelModalData.filter( value => value.id === parseInt(dataId))
            setData(filterData);
        }

        return(()=>{
                setData(null);
        }) 

    },[dataId])
    return [data, setDataId];
}