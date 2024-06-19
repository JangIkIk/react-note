import React from "react";
import { useNavigate } from "react-router-dom";
import { _ } from "./videoCardStyle";
import type { VideoListProps } from "../types";
import { timeCalc } from "../lib/timeCalc";

export const VideoCard = (props: {data: VideoListProps})=>{
    const {
        idx,
        thumbnailImg,
        channelIdx,
        content,
        title,
        createdAt,
      } = props.data;
    const navigate = useNavigate();
    const onClickVideoDetail = () => navigate(`videoDetail/${idx}`);
    const onClickChannelDetail = () => navigate(`channel/${channelIdx}`);

    return(
        <_.videoCard>
            <_.preview  onClick={onClickVideoDetail}>
                <_.previewImg src={`${process.env.REACT_APP_API_URL}/${thumbnailImg}`} alt={`${thumbnailImg}`}/>
                <_.previewTime>1:00:00</_.previewTime>
            </_.preview>

            <_.info>
                <_.channel onClick={onClickChannelDetail}>
                    <_.channelImg src={`${process.env.REACT_APP_API_URL}/${thumbnailImg}`} alt={`${thumbnailImg}`}/>
                </_.channel>

                <_.content>
                    <_.title>{title}</_.title>
                    <div><span>{content}</span></div>
                    <div>
                        <span>조회수 10만회</span>
                        <span>•{timeCalc(createdAt)}</span>
                    </div>
                </_.content>
            </_.info>
        </_.videoCard>
    );
}