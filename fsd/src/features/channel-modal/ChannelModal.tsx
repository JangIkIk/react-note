import React, { useEffect, useState } from "react";
import "./channelModal.css";
import {useModalInfo} from "./hooks/useModalInfo";



export const ChannelModal = (props: {id?: string})=>{
    const [data, setData] = useModalInfo();

    return(
        <>
            <div className="channelModal"  onClick={()=>setData(props.id)}>
                <span>채널 자세히 알아보기 ▶️</span>
            </div>
            {/* <div className="channelModal-open" onClick={()=>setData(null)}>
                <div className="channelModal-open__container">
                    <h3>채널 세부정보</h3>
                    <p>채널 링크</p>
                    <p>구독자</p>
                    <p>비디오</p>
                    <p>조회수</p>
                    <p>가입일</p>
                    <p>지역</p>
                </div>
            </div> */}
            {data ? <div className="channelModal-open" onClick={()=>setData(null)}>
                <div className="channelModal-open__container">
                    <h3>채널 세부정보</h3>
                    <p>채널 링크</p>
                    <p>구독자</p>
                    <p>비디오</p>
                    <p>조회수</p>
                    <p>가입일</p>
                    <p>지역</p>
                </div>
            </div> : null}
        </>
    );
}