import React from "react";
import "./filterButton.css";


export const FilterButton = (props: {children: string})=>{
    const text = props.children;
    return(
        <div className="filter-button">
            {text}
        </div>
    );
}