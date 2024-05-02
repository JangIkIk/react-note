import React from "react";
import "./channelTap.css";
import { TapHome } from "../channel-tap-home/TapHome";
import { TapVideos } from "../channel-tap-videos/TapVideos";
import { TapShorts } from "../channel-tap-shorts/TapShorts";
import { TapPlayList } from "../channel-tap-playList/TapPlayList"; 
import { TapCommunity } from "../channel-tap-community/TapCommunity";
import { useAppSelector } from "@app/state/store";

export const ChannelTap = (props: {id: number})=>{
    const id = props.id;
    const select = useAppSelector( state => state.ChannelTapSlice.value);
    const testButtonName = ["홈", "동영상", "Shorts", "재생목록", "커뮤니티"]
    return(
        <div className="channel-tap">
            <div className="channel-tap-buttons">
                {testButtonName && testButtonName.map((value, idx) => {
                    return(
                        <div className="channel-tap-name" key={idx}>
                            <p className="channel-tap-name__button">{value}</p>
                            <div className="channel-tap-name__line"></div>
                        </div>
                    );
                })}
            </div>
            <div className="channel-tap-line"></div>
            <div className="channel-tap-content">

                <TapHome/>
                <TapVideos/>
                <TapShorts/>
                <TapPlayList/>
                <TapCommunity/>
            </div>
        </div>
    );
}