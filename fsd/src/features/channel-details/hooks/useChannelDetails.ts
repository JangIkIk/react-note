import { useEffect, useState } from "react";
import {channelDetailData} from "../model/data";
import {ChannelDetails} from "../tpyes";

export const useGetChannelDetails = (id: number)=>{
    const [channelData, setChannelData] = useState<ChannelDetails[]>([]);
    const filterData = channelDetailData.filter( value => value.id === id);

    useEffect(()=>{
        setChannelData(filterData);
    },[])
    

    return channelData;
}