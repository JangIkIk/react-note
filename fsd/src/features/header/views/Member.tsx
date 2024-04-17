import React from "react";
import "../styles/member.css";
import video from "@image/video.svg";
import news from "@image/news.svg";
import loginLogo from "@image/loginLogo.svg";
import useLogout from "../hooks/useLogin";

const Member = ()=>{
    const {logout} = useLogout();

    return(
        <div className="member">
            <div>
                <img className="member-icons" src={video} alt="upload"/>
            </div>
            <div>
                <img className="member-icons" src={news} alt="news"/>
            </div>
            <div onClick={logout}>
                <img className="member-icons" src={loginLogo} alt="profile"/>
            </div>
        </div>
    );
}

export default Member;