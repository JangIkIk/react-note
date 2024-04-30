import React from "react";
import "./guestBox.css";
import loginLogo from "@images/loginLogo.svg";
import { More } from "../header-more/More";
import {Link} from "react-router-dom";

export const GuestBox = ()=>{

    return(
        <div className="guest">
            <More/>
            <Link className="guest-login" to="/login">
                <div className="guest-login-icon"><img className="guest-login-icon__img" src={loginLogo} alt="login"/></div>
                <span className="guest-login__text">로그인</span>
            </Link>
        </div>
    );
}