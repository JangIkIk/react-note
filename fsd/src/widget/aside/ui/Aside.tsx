import React from "react";
import "./aside.css";
import IconBtn from "./iconbtn/IconBtn";
import {memberData,guestData} from "../model/data";
import {useCheckUser} from "@shared/hooks/useCheckUser";
import { useDebug } from "@app/shared/hooks/useDebugStyle";


export const Aside = ()=>{
    const authorization = useCheckUser();
    const {debugStyle} = useDebug("widget/Aside")

    return(
        <div className="aside" {...debugStyle}>
            {authorization 
            ? (memberData && memberData.map((value,idx)=>{
                return <IconBtn key={idx} data={value}/>
            })) 
            : (guestData && guestData.map((value,idx)=>{
                return <IconBtn key={idx} data={value}/>
            }))}
        </div>
    );
}
