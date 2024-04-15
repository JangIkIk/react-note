import React from "react";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-menu">
          <span className="material-symbols-outlined">menu</span>
        </div>

        <div className="header-logo">
          <img className="header-logo__img" src="assets/logo.png" />
          <span className="header-logo__title">YouTube</span>
          <span className="header-logo__language">KR</span>
        </div>
      </div>

      <div className="header-center">
        <div className="header-search">
          <input className="header-search__input" placeholder="검색" />
          <div className="header-search__keyboard-icon">
            <span className="material-symbols-outlined">keyboard</span>
          </div>
          <div className="header-search__search-icon">
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
        <div className="header-search__mic-icon">
          <span className="material-symbols-outlined">mic</span>
        </div>
      </div>

      <div className="header-right">
        <span className="header-right__icons material-symbols-outlined">
          video_call
        </span>
        <span className="header-right__icons material-symbols-outlined">
          notifications
        </span>
        <span className="header-right__icons material-symbols-outlined">
          person
        </span>
      </div>
    </div>
  );
}

export default Header;
