import React, { useEffect, useState } from "react";
import "./channelModal.css";
import { useDebug } from "@app/shared/hooks/useDebugStyle";
import {useModalInfo} from "../hooks/useModalInfo";



export const ChannelModal = (props: {id?: string})=>{
    console.log("ChannelModal")
    const {debugStyle} = useDebug("entities/ChannelModal");
    const [data, setData] = useModalInfo();
    // const [data, setData] = useState<any>();
    // useEffect(()=>{
    //     console.log("ChannelModal useEffect실행")

    // },[])
    return(
        <>
            <div className="channelModal" {...debugStyle} onClick={()=>setData(props.id)}>
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