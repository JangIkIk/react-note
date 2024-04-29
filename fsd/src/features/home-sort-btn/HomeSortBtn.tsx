import React from "react";
import "./homeSortBtn.css";
import {useAppDispatch} from "@state/hooks";
import {changeSortBy} from "./model/slice";

export const HomeSortButton = (props: {children: string})=>{
    const text = props.children;
    const dispatch = useAppDispatch();

    return(
        <div className="sort" onClick={()=>dispatch(changeSortBy(text))}>
            {text}
        </div>
    );
}