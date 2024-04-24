import React from "react";
import "./homeList.css";
import {useDebug} from "@app/shared/hooks/useDebugStyle"
import {listDataType} from "../types";
import {dateCalc} from "@shared/utility/timeCalc";
import { useNavigate } from "react-router-dom";

export const HomeList = (props: {data: listDataType})=>{
    const {debugStyle} = useDebug("entities/HomeList");
    const {id, previewImg, playTime, channelImg, title, channelName, view, creatDay} = props.data;
    const navigate = useNavigate();

    const clickNavigate = ()=>{
        navigate(`channel/${id}`)
    }

    return(
        <div className="homeList" {...debugStyle}>
            <div className="homeList-preview">
                <img className="homeList-preview__img" src={previewImg} alt="#"/>
                <span className="homeList-preview__time">{playTime}</span>
            </div>

            <div className="homeList-info">
                <div className="homeList-channel" onClick={clickNavigate}>
                    <img className="homeList-channel__img" src={channelImg} alt="#"/>
                </div>

                <div className="homeList-content">
                    <h3 className="homeList-title">
                        {title}
                    </h3>
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
}