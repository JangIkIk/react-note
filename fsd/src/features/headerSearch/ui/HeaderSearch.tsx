import React from "react";
import "./headerSearch.css";
import keyboard from "@image/keyboard.svg";
import search from "@image/search.svg";
import mic from "@image/mic.svg";
import {useAppSelector} from "@app/hooks";


export const HeaderSearch = ()=>{
    const lineValue = useAppSelector( state => state.line.value);
    
    return(
        <div className={`headerSearch ${lineValue ? "headerSearch-line" : ""}`}>
            <div className="headerSearch-search">
                <input className="headerSearch-search__input" placeholder="검색"/>
                <img className="headerSearch-search__keyboard-img" src={keyboard} alt="keyboard"/>
                <button className="headerSearch-search-icon"><img className="headerSearch-search-icon__img" src={search} alt="search"/></button>
            </div>
            <button className="headerSearch-mic"><img className="headerSearch-mic__img" src={mic} alt="mic"/></button>
        </div>
    );
}