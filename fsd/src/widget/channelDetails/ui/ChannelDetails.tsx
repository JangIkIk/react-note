import React from "react";
import "./channelDetails.css";
import {useGetChannelDetails} from "../hooks/useGetChannelDetails";

export const ChannelDetails = ()=>{
    // console.log(useGetChannelDetails(1));

    return(
        <div className="channelDetails">
            <div className="channelDetails-banner">배너 배경</div>
            <div className="channelDetails-info">
                <div className="channelDetails-info-profile">
                    <img className="channelDetails-info-profile__img" src="#" alt="#"/>
                </div>
                <div className="channelDetails-info-content">
                    <h1 className="channelDetails-info-content__title">쩌리 뮤직 JUST</h1>
                    <p className="channelDetails-info-content__text">@계정명 ' 구독자 N명 ' 동영상 N개</p>
                    <button className="channelDetails-info-content__more">채널 자세히 알아보기</button>
                    <button className="channelDetails-info-content__subscribe">구독</button>
                </div>
            </div>
        </div>
    );
}