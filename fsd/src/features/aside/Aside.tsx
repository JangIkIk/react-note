import React from "react";
import "./aside.css";
import IconBtn from "./views/IconBtn";
import {memberData,guestData} from "./model/data";
import useCheckUser from "@hooks/useCheckUser";


const Aside = ()=>{
    const authorization = useCheckUser();

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

export default Aside;