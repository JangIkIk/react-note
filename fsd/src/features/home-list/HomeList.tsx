import React from "react";
import "./homeList.css";
import {listDataType } from "./types";
import { dateCalc } from "@utility/timeCalc";
import { Link } from "react-router-dom";

export const HomeList = (props: { data: listDataType }) => {
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
    <div className="homeList">
      <div className="homeList-preview">
        <img className="homeList-preview__img" src={previewImg} alt="#" />
        <span className="homeList-preview__time">{playTime}</span>
      </div>

      <div className="homeList-info">
        <Link to={`channel/${id}`} className="homeList-channel">
          <img className="homeList-channel__img" src={channelImg} alt="#" />
        </Link>
        <div className="homeList-content">
          <h3 className="homeList-title">{title}</h3>
          <div>
            <span>{channelName}</span>
          </div>
          <div>
            <span>조회수 {view}회</span>
            <span className="homeList-create-day">{dateCalc(creatDay)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};