import { useEffect, useState } from "react";
import {channelDetailData} from "../model/testData";
import {type ChannelDetails} from "../types";

export const useGetChannelDetails = (id: number)=>{
    const [channelData, setChannelData] = useState<ChannelDetails[]>([]);
    const filterData = channelDetailData.filter( value => value.id === id);

    useEffect(()=>{
        setChannelData(filterData);
    },[])
    

    return channelData;
}