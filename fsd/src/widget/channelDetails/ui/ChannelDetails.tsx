import React from "react";
import "./channelDetails.css";
import {useGetChannelDetails} from "../hooks/useGetChannelDetails";
import { useDebug } from "@app/shared/hooks/useDebugStyle";
import {ChannelModal} from "@entities/channelModal/index";

export const ChannelDetails = (props: {id?: string})=>{
    console.log("ChannelDetails")
    const [detailData] = useGetChannelDetails(parseInt(props.id as string));
    const {debugStyle} = useDebug("widget/ChannelDetails");
    
    return(
        <div className="channelDetails" {...debugStyle}>
            <div className="channelDetails-banner" style={{backgroundImage: `url(${detailData?.banner})`}}></div>
            <div className="channelDetails-info">
                <div className="channelDetails-info-profile">
                    <img className="channelDetails-info-profile__img" src={detailData?.channelImg} alt={detailData?.channelName}/>
                </div>
                <div className="channelDetails-info-content">
                    <h1 className="channelDetails-info-content__title">{detailData?.channelName}</h1>
                    <p className="channelDetails-info-content__text">{`${detailData?.accountName} ‧ 구독자${detailData?.subscribe}명 ‧ 동영상${detailData?.videos}개`}</p>
                    <ChannelModal id={props.id}/>
                    <button className="channelDetails-info-content__subscribe">구독</button>
                </div>
            </div>
        </div>
    );
}