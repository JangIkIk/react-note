import React from "react";
import "./homeListContainer.css";
import {HomeList} from "@entities/homeList/index";
import {useDebug} from "@app/shared/hooks/useDebugStyle";
import {useSortList} from "@entities/homeList/index";

export const HomeListContainer = ()=>{
    const {debugStyle} = useDebug("widget/ListContainer");
    const {listData} = useSortList();
    return(
        <div className="home-list" {...debugStyle}>
                {listData && listData.map((value)=> {
                    return <div className="home-list__item" key={value.id}><HomeList data={value}/></div>
                })}
        </div>
    );
}