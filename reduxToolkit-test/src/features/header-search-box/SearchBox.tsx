import React from "react";
import "./searchBox.css";
import keyboard from "@images/keyboard.svg";
import search from "@images/search.svg";
import mic from "@images/mic.svg";
import { Icon } from "@components/icon/Icon";

export const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <div className="search-box">
          <input className="search-box__input" placeholder="검색" />
          <Icon src={keyboard} alt={"keyboard"} />
        </div>
        <button className="search-box__button">
          <Icon src={search} alt={"search"} />
        </button>
      </div>
      <button className="search-mic">
        <Icon src={mic} alt={"mic"} />
      </button>
    </div>
  );
};
