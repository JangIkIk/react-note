import React, {useState} from "react";
import "./memberBox.css";
import video from "@images/video.svg";
import news from "@images/news.svg";
import loginLogo from "@images/loginLogo.svg";
import { Logout } from "@features/logout/Logout";

export const MemberBox = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <div className="member">
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