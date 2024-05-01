import React from "react";
import "./guestBox.css";
import loginLogo from "@images/loginLogo.svg";
import more from "@images/more.svg";
import {Link} from "react-router-dom";
import { Icon } from "@app/components/icon/Icon";

export const GuestBox = ()=>{

    return(
        <div className="guest">
            <Icon src={more} alt={"more"}/>
            <Link className="guest-login" to="/login">
                <div className="guest-login-icon"><img className="guest-login-icon__img" src={loginLogo} alt="login"/></div>
                <span className="guest-login__text">로그인</span>
            </Link>
        </div>
    );
}