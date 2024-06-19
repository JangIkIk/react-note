import React from "react";
import {  Outlet } from "react-router-dom";
import { _ } from "./channelDetailStyle";
import { Content } from "@widgets/channel-content/index";


export const ChannelDetail = () => {

    return(
        <_.channelDetail>
            <Content/>
            {/* <Outlet/> */}
        </_.channelDetail>
    );
}