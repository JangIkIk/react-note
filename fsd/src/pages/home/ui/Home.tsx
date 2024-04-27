import React from "react";
import "./home.css";
import {useDebug} from "@app/shared/hooks/useDebugStyle";
import {HomeListContainer} from "@app/widget/homelistContainer/index";
import {HomeSortBtns} from "@widget/homeSortBtns/index";

export const Home = ()=>{
    const {debugStyle} = useDebug("pages/Home");
    
    return(
        <div className="home" {...debugStyle}>
            <HomeSortBtns/>
            <HomeListContainer/>
        </div>
    );
}