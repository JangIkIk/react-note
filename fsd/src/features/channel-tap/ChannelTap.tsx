import React from "react";
import "./channelTap.css";
import { TapHome } from "../channel-tap-home/TapHome";
import { TapVideos } from "../channel-tap-videos/TapVideos";
import { TapShorts } from "../channel-tap-shorts/TapShorts";
import { TapPlayList } from "../channel-tap-playList/TapPlayList"; 
import { TapCommunity } from "../channel-tap-community/TapCommunity";
import { useAppSelector, useAppDispatch } from "@app/state/store";
import { changeValue } from "@state/channel-tap-slice";


export const ChannelTap = (props:{ data : string[]})=>{
    const buttons = props.data;
    const select = useAppSelector( state => state.ChannelTapSlice.value);
    const dispatch = useAppDispatch();
    const onClickTapNum = (idx: number) => dispatch(changeValue(idx));

    const testComp = [<TapHome/>, <TapVideos/>, <TapShorts/>, <TapPlayList/>, <TapCommunity/>]
    /*
        현재 탭 부분에서 버튼또한 서버 요청으로 인한 데이터로 받아와야한다.
        버튼또한 채널마다 다틀리기때문,

    */
    return(
        <div className="channel-tap">
            <div className="channel-tap-buttons">
                {buttons && buttons.map((value, idx) => {
                    return(
                        <div className="channel-tap-name" key={idx} onClick={()=>onClickTapNum(idx)}>
                            <p className="channel-tap-name__button" style={{color: select === idx ? "var(--default-text-color)" : ""}}>{value}</p>
                            {select === idx ? <div className="channel-tap-name__line"></div> : ""}
                        </div>
                    );
                })}
                <div className="channel-tap-name">
                    <p className="channel-tap-name__button">아이콘</p>
                </div>
            </div>
            <div className="channel-tap-line"></div>
        </div>
    );
}