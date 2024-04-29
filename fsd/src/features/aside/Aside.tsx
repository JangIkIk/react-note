import React from "react";
import "./aside.css";
import {IconBtn} from "./ui/icon-btn/IconBtn";
import {memberData,guestData} from "./model/data";
import {checkUser} from "@utility/checkUser";


export const Aside = ()=>{
    const authorization = checkUser();

    return(
        <div className="aside">
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