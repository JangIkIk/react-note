import React from "react";
import "./aside.css";
import IconBtn from "./views/IconBtn";
import {data} from "./model/data";

const Aside = ()=>{

    return(
        <div className="aside">
            {data && data.map((value,idx)=>{
                return <IconBtn key={idx} data={value}/>
            })}
        </div>
    );
}

export default Aside;