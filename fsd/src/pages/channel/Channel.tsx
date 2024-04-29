import React from "react";
import "./channel.css";
import { useParams} from "react-router-dom";
import {ChannelDetails} from "@features/channel-details/ChannelDetails";


export const Channel = ()=>{
    let {id} = useParams();

    return(
        <>
            <div className="channel">
                <ChannelDetails id={id}/>
            </div>
        </>
        
    );
}