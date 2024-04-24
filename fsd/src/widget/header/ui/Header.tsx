import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { HeaderSearch } from "@features/headerSearch/index";
import {HeaderMemberIcons} from "@features/headerMemberIcons/index";
import {useCheckUser} from "@shared/hooks/useCheckUser";
import {Guest} from "./guest/Guest";
import {useDebug} from "@app/shared/hooks/useDebugStyle";
import menu from "@image/menu.svg";
import logo from "@image/yotubeLogo.png";

export const Header = () => {
  const authorization = useCheckUser();  
  const {debugStyle} = useDebug("widget/header");

  return (
    <div className="header" {...debugStyle}>
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
        <HeaderSearch />
      </div>
      <div className="header-right">
        {authorization 
        ? <HeaderMemberIcons/> 
        :<Guest/>}
      </div>
    </div>
  );
};
