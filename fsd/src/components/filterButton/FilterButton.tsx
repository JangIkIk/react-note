import React from "react";
import "./filterButton.css";


export const FilterButton = (props: {children: string, active?: boolean})=>{
    const {children, active} = props;
    return(
        <div className={`filter-button ${active && "filter-button--active"}`}>
            {children}
        </div>
    );
}