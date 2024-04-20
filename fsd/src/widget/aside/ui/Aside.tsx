import React from "react";
import "./aside.css";
import IconBtn from "./views/IconBtn";
import {useAppSelector} from "@app/hooks";
import {memberData,guestData} from "../model/data";
import {useCheckUser} from "@shared/hooks/useCheckUser";


export const Aside = ()=>{
    const authorization = useCheckUser();
    const lineValue = useAppSelector( state => state.line.value);

    return(
        <div className={`aside ${lineValue ? "aside-line" : ""}`}>
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
