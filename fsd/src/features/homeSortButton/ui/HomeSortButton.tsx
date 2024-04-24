import React from "react";
import "./homeSortButton.css";
import {useAppDispatch} from "@app/hooks";
import {changeSortBy} from "../model/selectSlice";
import {useDebug} from "@shared/hooks/useDebugStyle"

export const HomeSortButton = (props: {children: string})=>{
    const text = props.children;
    const dispatch = useAppDispatch();
    const {debugStyle} = useDebug("features/SortButton");
    
    

    return(
        <div className="sort" onClick={()=>dispatch(changeSortBy(text))} {...debugStyle}>
            {text}
        </div>
    );
}