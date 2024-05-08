import React from "react";
import "./tapContent.css";
import { TapHome } from "../channel-tap-home/TapHome";
import { TapVideos } from "../channel-tap-videos/TapVideos";
import { TapShorts } from "../channel-tap-shorts/TapShorts";
import { TapPlayList } from "../channel-tap-playList/TapPlayList"; 
import { TapCommunity } from "../channel-tap-community/TapCommunity";
import { useAppSelector } from "@app/state/store";


export const TapContent = ()=>{
    const select = useAppSelector( state => state.ChannelTapSlice.value);
    const contentComp = [<TapHome/>, <TapVideos/>, <TapShorts/>, <TapPlayList/>, <TapCommunity/>]
    return(
        <div className="tap-content">
            {contentComp[select]}
        </div>
    );
}