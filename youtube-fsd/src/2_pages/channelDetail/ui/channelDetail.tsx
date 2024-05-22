import React from "react";
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { _ } from "./channelDetailStyle";
import { Content } from "@widgets/channel-content/index";
import {Content as Test} from "@widgets/home-content"



export const ChannelDetail = () => {
    console.log("채널페이지 렌더링")
    return(
        <_.channelDetail>
            <Content/>
            <Outlet/>
            {/* <Test></Test> */}
        </_.channelDetail>
    );
}