import React from "react";
import "./videoList.css";
import { VideoListProps } from "./type";
import { timeCalc } from "@utility/timeCalc";
import { Link } from "react-router-dom";

export const VideoList = (props: {data: VideoListProps }) => {
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

  return (
    <div className="video-list">
      <div className="video-list-preview">
        <img className="video-list-preview__img" src={previewImg} alt="#" />
        <span className="video-list-preview__time">{playTime}</span>
      </div>

      <div className="video-list-info">
        {channelImg && 
        <Link to={`channel/${id}`} className="video-list-channel">
          <img className="video-list-channel__img" src={channelImg} alt="#" />
        </Link>}
        <div className="video-list-content">
          <h3 className="video-list-title">{title}</h3>
          <div>
            <span>{channelName}</span>
          </div>
          <div>
            <span>조회수 {view}회</span>
            <span className="video-list-create-day">{timeCalc(creatDay)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};