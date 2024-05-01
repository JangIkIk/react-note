import React from "react";
import "./logoBox.css";
import { Icon } from "@app/components/icon/Icon";
import { Link } from "react-router-dom";
import menu from "@images/menu.svg";
import logo from "@images/yotubeLogo.png";
import { useAppDispatch } from "@state/store";
import {changeValue} from "@app/state/aside-menu-details-slice";

export const LogoBox = () => {
  const dispatch = useAppDispatch();
  const openModal = ()=> dispatch(changeValue());

  /*
    상태관리를 사용하지 않고 Aside를 확장시키려 한다면?
    기존의 aside를 두고 그위에 덮어야 할것같다.
    확장 aside는 투명도로 감춰놨다가 클릭시 등장하는걸로~
    현재는 상태관리를 사용하기때문에 header 햄버거 버튼 클릭시에
    dispath하여 aside에서 상태에 따라 기존 aside를 감추고, 새로운 확장 aside를 보여줌
  */
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
