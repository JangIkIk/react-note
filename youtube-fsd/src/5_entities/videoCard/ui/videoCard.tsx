import React from "react";
import { useNavigate } from "react-router-dom";
import { _ } from "./videoCardStyle";
import type { VideoListProps } from "../types";
import { timeCalc } from "../lib/timeCalc";
import { route } from "@shared/consts/index";


export const VideoCard = (props: {data: VideoListProps})=>{
    const {
        id,
        previewImg,
        playTime,
        channelImg,
        title,
        channelName,
        view,
        creatDay,
      } = props.data;
    const navigate = useNavigate();
    const onClickPath = (userId: number) => navigate(`/${route.CHANNEL}/${userId}`);
    return(
        <_.videoCard>
            <_.preview>
                <_.previewImg src={previewImg} alt={previewImg}/>
                <_.previewTime>{playTime}</_.previewTime>
            </_.preview>

            <_.info>
                <_.channel onClick={()=>onClickPath(id)}>
                    <_.channelImg src={channelImg} alt={channelImg}/>
                </_.channel>

                <_.content>
                    <_.title>{title}</_.title>
                    <div><span>{channelName}</span></div>
                    <div>
                        <span>조회수 {view}회</span>
                        <_.createDay>{timeCalc(creatDay)}</_.createDay>
                    </div>
                </_.content>
            </_.info>
        </_.videoCard>
    );
}