import React from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import {ChannelData} from "./ChannelContainer.tsx";


function ChannelView(props: {channelData: ChannelData, children: React.ReactNode}){
    const {children} = props;
    const {channelData} = props;
    
  return (
    <div className="user-channel">
      <div className="user-channel__container">
        <div
          className="user-channel__banner"
          style={{ backgroundImage: `url(${channelData.banner})` }}
        ></div>

        <div className="user-channel__info">
          <div>
            <img className="user-channel__img" src={channelData.profile} />
          </div>

          <div className="user-channel__content">
            <h1 className="user-channel__content__title">{channelData.name}</h1>
            <span className="user-channel__content__view">{`${channelData.account} ‧ 구독자${channelData.subscriber} ‧ 동영상${channelData.video}개`}</span>
            <span className="user-chaanel__content__more">정보보기</span>
            <button className="user-channel__content__subscribe">구독</button>
          </div>
        </div>

        {/* 패턴은 같은방식으로 ->  */}
        <div className="user-channel__tap-buttons">
          <NavLink className={({isPending, isActive})=>[isPending ? "" : "user-channel__tap-buttons-btn",isActive ? "user-channel__tap-buttons-btn--line" : ""].join(" ")} to={`/${channelData.id}`} end>홈</NavLink>
          <NavLink className={({isPending, isActive})=>[isPending ? "" : "user-channel__tap-buttons-btn",isActive ? "user-channel__tap-buttons-btn--line" : ""].join(" ")} to={`/${channelData.id}/videos`}>동영상</NavLink>
          <NavLink className={({isPending, isActive})=>[isPending ? "" : "user-channel__tap-buttons-btn",isActive ? "user-channel__tap-buttons-btn--line" : ""].join(" ")} to={`/${channelData.id}/shorts`}>Shorts</NavLink>
          <NavLink className={({isPending, isActive})=>[isPending ? "" : "user-channel__tap-buttons-btn",isActive ? "user-channel__tap-buttons-btn--line" : ""].join(" ")} to={`/${channelData.id}/playlists`}>재생목록</NavLink>
          <NavLink className={({isPending, isActive})=>[isPending ? "" : "user-channel__tap-buttons-btn",isActive ? "user-channel__tap-buttons-btn--line" : ""].join(" ")} to={`/${channelData.id}/community`}>커뮤니티</NavLink>
          <span className="user-channel__tap-buttons-btn material-symbols-outlined">search</span>
        </div>
      </div>

      <div className="user-channel__tap-line"></div>

      <div className="user-channel__tap-screen">
        {children}
      </div>
    </div>
  );
}

export default ChannelView;