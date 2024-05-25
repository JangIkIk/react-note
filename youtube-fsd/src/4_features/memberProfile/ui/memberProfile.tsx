import React, {useState} from "react";
import { _ } from "./memberProfileStyle";
import {useMemberProfile} from "../api/useMemberProfile";
import { MemberModal } from "@features/memberModal/index";

export const MemberProfile = ()=>{
    const [memberModal, setMemberModal] = useState(false);
    const [profileData] = useMemberProfile("channel");
    console.log(profileData);
    return(
        <_.member>
            <_.memberIcons>
              <svg
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
              </svg>
            </_.memberIcons>
            <_.memberIcons onClick={()=>setMemberModal(!memberModal)}>
              <div>이미지라인</div>
            </_.memberIcons>
            {memberModal ? <MemberModal/> : ""}
          </_.member>
    );
}