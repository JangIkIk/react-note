import React from "react";
import "./homeSortBtns.css";
import {changeSort} from "../../state/home-sort-slice";
import {FilterButton} from "@components/filterButton/FilterButton"

export const HomeSortButtons = ()=>{

    return(
        <div className="home-sort-button">
            <FilterButton>전체</FilterButton>
            <FilterButton>전체</FilterButton>
            <FilterButton>전체</FilterButton>
        </div>
    );
}