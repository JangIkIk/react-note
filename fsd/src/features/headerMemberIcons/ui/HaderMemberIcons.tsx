import React, {useState} from "react";
import "./headerMemberIcons.css";
import video from "@image/video.svg";
import news from "@image/news.svg";
import loginLogo from "@image/loginLogo.svg";
import { useAppSelector } from "@app/hooks";
import { Logout } from "@features/authentication/logout/index";

export const HeaderMemberIcons = () => {
  const lineValue = useAppSelector((state) => state.line.value);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <div className={`member ${lineValue ? "member-line" : ""}`}>
        <div>
          <img className="member-icons" src={video} alt="upload" />
        </div>
        <div>
          <img className="member-icons" src={news} alt="news" />
        </div>
        <div onClick={()=> setModal(!modal)}>
          <img className="member-icons" src={loginLogo} alt="profile" />
        </div>
      </div>
      {modal 
        ? <div className="member__modal">
            <Logout/>
        </div> 
        : null}
    </>
  );
};
