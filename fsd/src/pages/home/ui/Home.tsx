import React from "react";
import "./home.css";
import {SortButton} from "@shared/ui/sortButton/SortButton";
import {mainBtnData} from "../model/data";
import {useDebug} from "@app/shared/hooks/useDebugStyle";
import {useHomeListData} from "@entities/homeList/index";
import {ListContainer} from "@widget/listContainer/index";

export const Home = ()=>{
    const {debugStyle} = useDebug("pages/Home");
    const listData = useHomeListData();
    
    return(
        <div className="home" {...debugStyle}>
            <div className="home-sort">
                {mainBtnData && mainBtnData.map( (value, idx) => <SortButton key={idx}>{value}</SortButton>)}
            </div>
            <ListContainer data={listData}/>
        </div>
    );
}