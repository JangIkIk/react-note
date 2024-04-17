import React from "react";
import "../styles/centerpart.css";
import keyboard from "@image/keyboard.svg";
import search from "@image/search.svg";
import mic from "@image/mic.svg";

const CenterPart = ()=>{

    return(
        <div className="centerpart">
            <div className="centerpart-search">
                <input className="centerpart-search__input" placeholder="검색"/>
                <img className="centerpart-search__keyboard-img" src={keyboard} alt="keyboard"/>
                <button className="centerpart-search-icon"><img className="centerpart-search-icon__img" src={search} alt="search"/></button>
            </div>
            <button className="centerpart-mic"><img className="centerpart-mic__img" src={mic} alt="mic"/></button>
        </div>
    );
}

export default CenterPart;