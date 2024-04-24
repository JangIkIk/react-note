import React from "react";
import "./listContainer.css";
import {HomeList} from "@entities/homeList/index";
import { type listDataType } from "@entities/homeList/index";
import {useDebug} from "@app/shared/hooks/useDebugStyle";

export const ListContainer = (props: {data: listDataType[]})=>{
    const data = props.data;
    const {debugStyle} = useDebug("widget/ListContainer");
    return(
        <div className="home-list" {...debugStyle}>
                {data && data.map((value)=> {
                    return <div className="home-list__item" key={value.id}><HomeList data={value}/></div>
                })}
        </div>
    );
}