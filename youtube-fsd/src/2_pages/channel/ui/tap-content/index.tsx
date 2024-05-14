// package
import React from "react";
import { Outlet } from "react-router-dom";

export const TapContent = ()=>{

    return(
        <div style={{color: "white"}}>
            <Outlet/>
        </div>
    );
}