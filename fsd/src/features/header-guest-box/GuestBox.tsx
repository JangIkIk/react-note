import React from "react";
import "./guestBox.css";
import loginLogo from "@images/loginLogo.svg";
import {Link} from "react-router-dom";
import {MoreModal} from "@features/header-more-modal/MoreModal";

export const GuestBox = ()=>{

    return(
        <div className="guest">
            <MoreModal/>
            <Link className="guest-login" to="/login">
                <div className="guest-login-icon"><img className="guest-login-icon__img" src={loginLogo} alt="login"/></div>
                <span className="guest-login__text">로그인</span>
            </Link>
        </div>
    );
}