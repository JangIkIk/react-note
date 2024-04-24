import React from "react";
import "./debugLineCheck.css";
import {useAppDispatch} from "@app/hooks";
import { isLine } from "@app/lineSlice";

export const DebugLineCheck = ()=>{
    const dispatch = useAppDispatch();


    return(
        <button className="lineCheck" onClick={()=>dispatch(isLine())}>라인표시</button>
    );
}