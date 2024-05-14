// package
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// slcie
import type { VideoListProps } from "./types";
// layers
import { timeCalc } from "@shared/lib/timeCalc";


// 위젯으로 -- >
export const VideoList = (props: {data: VideoListProps}) => {
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
    const onClickPath = (userId: number) => navigate(`/channel/${userId}`);
    return(
        <Style_videoList>
            <Style_preview>
                <Style_preview__img src={previewImg} alt={previewImg}/>
                <Style_preview__span>{playTime}</Style_preview__span>
            </Style_preview>
            
            <Style_info>
                <Style_channel onClick={()=>onClickPath(id)}>
                    <Style_channel__img src={channelImg} alt={channelImg}/>
                </Style_channel>

                <Style_content>
                    <Style_title>{title}</Style_title>
                    <div>
                        <span>{channelName}</span>
                    </div>
                    <div>
                        <span>조회수 {view}회</span>
                        <Style_createDay>{timeCalc(creatDay)}</Style_createDay>
                    </div>
                </Style_content>
            </Style_info>
        </Style_videoList>
    );    
}

const Style_videoList = styled.div`
    color: ${({theme}) => theme.fontColor_main};
`;

const Style_preview = styled.div`
    position: relative;
`;

const Style_preview__img = styled.img`
    width: 100%;
    vertical-align: bottom;
    border-radius: 15px;
`;

const Style_preview__span = styled.span`
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: ${({theme}) => theme.background_main};
    padding: 4px 6px;
    font-size: ${({theme}) => theme.fontSize.xs};
    border-radius: 10px;
`;

const Style_info = styled.div`
    display: flex;
    gap: 5px;
    padding-top: 12px;
`;
const Style_channel = styled.div`
    width: 36px;
    margin-right: 10px;
    flex-shrink: 0;
`;
const Style_channel__img = styled.img`
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
`;

const Style_content = styled.div`
    font-size: ${({theme}) => theme.fontSize.xs};
    color: ${({theme}) => theme.fontColor_main};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-right: 10px;
`;
const Style_title = styled.h3`
    font-size: ${({theme}) => theme.fontSize.base};
    color: ${({theme}) => theme.fontColor_main};
    overflow: hidden;
    display: -webkit-box; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
const Style_createDay = styled.span`
    content: "•";
`;




