import React from "react";
import "./guestBox.css";
import loginLogo from "@images/loginLogo.svg";
import {MoreModal} from "@features/header-more-modal/MoreModal";
import { useNavigate } from "react-router-dom";

export const GuestBox = ()=>{
    const navigate = useNavigate();
    const onClickPath = () => navigate("/login");

    return(
        <div className="guest">
            <MoreModal/>
            <div className="guest-login" onClick={onClickPath}>
                <div className="guest-login-icon"><img className="guest-login-icon__img" src={loginLogo} alt="login"/></div>
                <span className="guest-login__text">로그인</span>
            </div>
        </div>
    );
}