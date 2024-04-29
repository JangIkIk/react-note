import React from "react";
import "./channel.css";
import { useParams} from "react-router-dom";
import { useDebug } from "@app/shared/hooks/useDebugStyle";
import {ChannelDetails} from "@widget/channelDetails/index";
import {NotFound} from "@shared/ui/notFound/NotFound";
/*
    Link태그를 클릭하여 넘어온 파라미터는 존재한다.
    그렇다면 존재하지 않은 id를 넘겨주었을때 || undefined 는 당연히 에러 페이지를 보여줘야하니 
    부모에서 props로 넘겨주는게 맞다고 판단, 존재하지 않으면 다른 컴포넌트를 렌더링 할필요가 없다
*/
export const Channel = ()=>{
    console.log("Channel");
    const {debugStyle} = useDebug("pages/channel");
    let {id} = useParams();

    return(
        <>
            <div className="channel" {...debugStyle}>
                <ChannelDetails id={id}/>
            </div>
        </>
        
    );
}