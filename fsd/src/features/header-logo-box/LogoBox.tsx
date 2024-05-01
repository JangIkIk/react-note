import React from "react";
import "./logoBox.css";
import { Icon } from "@app/components/icon/Icon";
import { Link } from "react-router-dom";
import menu from "@images/menu.svg";
import logo from "@images/yotubeLogo.png";
import { useAppDispatch } from "@state/store";
import {changeValue} from "@state/headerMenuModal-slice";

export const LogoBox = () => {
  const dispatch = useAppDispatch();
  const openModal = ()=> dispatch(changeValue());

  return (
    <div className="logo-box">
      <div className="logo-box__menu" onClick={openModal}>
        <Icon src={menu} alt={"menu"} />
      </div>
      <Link to={"/"} className="logo-box-logo">
        <img className="logo-box-logo__img" src={logo} alt="logo" />
        <span className="logo-box-logo__title">YouTube</span>
        <span className="logo-box-logo__language">KR</span>
      </Link>
    </div>
  );
};
