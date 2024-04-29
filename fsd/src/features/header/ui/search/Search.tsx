import React from "react";
import "./search.css";
import keyboard from "@images/keyboard.svg";
import search from "@images/search.svg";
import mic from "@images/mic.svg";


export const Search = ()=>{
    return(
        <div className="headerSearch">
            <div className="headerSearch-search">
                <input className="headerSearch-search__input" placeholder="검색"/>
                <img className="headerSearch-search__keyboard-img" src={keyboard} alt="keyboard"/>
                <button className="headerSearch-search-icon"><img className="headerSearch-search-icon__img" src={search} alt="search"/></button>
            </div>
            <button className="headerSearch-mic"><img className="headerSearch-mic__img" src={mic} alt="mic"/></button>
        </div>
    );
}