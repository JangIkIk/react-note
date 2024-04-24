import React from "react";
import "./sortButton.css";
import {useDebug} from "@shared/hooks/useDebugStyle";

export const SortButton = (props: {children: string})=>{
    const {children} = props;
    const {debugStyle} = useDebug("shared/sortButton");
    return(
        <button className="sort" {...debugStyle}>
            {children}
        </button>
    );
}