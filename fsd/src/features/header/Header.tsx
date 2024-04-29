import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Search } from "./ui/search/Search";
import {MemberBox} from "./ui/member-box/MemberBox";
import { checkUser } from "@utility/checkUser";
import { GuestBox } from "./ui/guest-box/GuestBox";

import menu from "@images/menu.svg";
import logo from "@images/yotubeLogo.png";

export const Header = () => {
  const authorization = checkUser();  

  return (
    <div className="header">
      <div className="header-left">
        <div className="leftpart-menu">
          <img className="leftpart-menu__img" src={menu} alt="menu" />
        </div>
        <Link to={"/"} className="leftpart-logo">
          <img className="leftpart-logo__img" src={logo} alt="logo" />
          <span className="leftpart-logo__title">YouTube</span>
          <span className="leftpart-logo__language">KR</span>
        </Link>
      </div>
      <div className="header-center">
        <Search />
      </div>
      <div className="header-right">
        {authorization 
        ? <MemberBox/> 
        :<GuestBox/>}
      </div>
    </div>
  );
};