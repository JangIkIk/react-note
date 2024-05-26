import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { _ } from "./headerStyle";
import logo from "@images/yotubeLogo.png";
import { Search } from "@features/search/index";
import { GuestModal } from "@features/guestModal";
import { MemberProfile } from "@features/memberProfile";

export const Header = () => {
  const [guestModal, setGuestModal] = useState(false);
  const navigate = useNavigate();
  const onClickHomeRoute = () => navigate("/");
  const onClickLoginRoute = () => navigate("/login");
  const [cookie] = useCookies(["accessToken"]);

  return (
    <_.header>
      <_.start>
        <_.nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
          </svg>
        </_.nav>
        <_.logo onClick={onClickHomeRoute}>
          <_.logoImg src={logo} alt={`${logo}`} />
          <_.logoTitle>YouTube</_.logoTitle>
          <_.logoLanguage>KR</_.logoLanguage>
        </_.logo>
      </_.start>
      <_.center>
        <Search />
      </_.center>
      <_.end>
        {/* 멤버 프로필에 계층구조 문제가있음
          동영상업로드 모달 / 로그아웃,프로필수정,모드 모달 두개가 존재한다
          즉, 헤더의 오른쪽 box는 3개의 features가 존재하는거다
          header에서 라인을 잡아주고, 클릭시 다른 features를 열어재끼는게 좋을것 같다

        */}
        {cookie.accessToken ? (
          <_.member>
            {/* 비디오 업로드 라인 */}
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
            <MemberProfile/>
          </_.member>
        ) : (
          <_.guest>
            <_.guestMore onClick={() => setGuestModal(!guestModal)}>
              <svg height="24px" viewBox="0 -960 960 960" width="24px">
                <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
              </svg>
              {guestModal ? <GuestModal /> : ""}
            </_.guestMore>
            <_.guestLogin onClick={onClickLoginRoute}>
              <_.guestLoginIcon>
                <svg
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                </svg>
              </_.guestLoginIcon>
              <_.guestLoginText>로그인</_.guestLoginText>
            </_.guestLogin>
          </_.guest>
        )}
      </_.end>
    </_.header>
  );
};
