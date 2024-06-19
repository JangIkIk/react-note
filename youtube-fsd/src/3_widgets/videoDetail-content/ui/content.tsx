import React from "react";
import { useNavigate } from "react-router-dom";
import { _ } from "./contentStyle";
import { useGetVideoDetail } from "../api/useGetVideoDetail";

export const Content = ()=>{
    const [videoDetailInfo] = useGetVideoDetail();
    const navigate = useNavigate();
    const onClickRoute = () => navigate("채널 idx");
    return(
        <_.videoDetail>
            <_.thumbnail>
                <_.thumbnailImg src={`${process.env.REACT_APP_API_URL}/${videoDetailInfo?.thumbnailImg}`} alt={`${videoDetailInfo?.thumbnailImg}`}/>
            </_.thumbnail>
            <_.title>{videoDetailInfo?.title}</_.title>
            <_.info>
                <_.channelImg src={`${process.env.REACT_APP_API_URL}/${videoDetailInfo?.thumbnailImg}`} alt={`${videoDetailInfo?.thumbnailImg}`} onClick={onClickRoute}/>
                <_.videoContent>
                    <p>{videoDetailInfo?.content}</p>
                    <p>{`${videoDetailInfo?.createdAt}`}</p>
                </_.videoContent>
            </_.info>
        </_.videoDetail>
    );
}