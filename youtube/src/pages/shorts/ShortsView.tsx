import React from "react";
import "./index.css";
import {VideoInfo} from "./ShortsContainer.tsx";
import IconBtnContainer from "./components/iconbtn/IconBtnContainer.tsx";

function ShortsView(props: {videoInfo: VideoInfo}) {
    const {videoInfo} = props;

  return (
    <main className="shorts">
      <div className="shorts__video-frame">
        <video
          className="shorts__video"
          src={videoInfo.videoFile}
          controls
          autoPlay
          loop
        ></video>
        <div className="shorts__info">
          <div className="shorts-account">
            <img className="shorts-account__img" src={videoInfo.accountImg}/>
            <span className="shorts-account__name">{videoInfo.accountName}</span>
            <button className="shorts-account__subscribe">구독</button>
          </div>
          <p className="shorts__content">{videoInfo.videoContent}</p>
        </div>
      </div>
      <div className="shorts-icons">
        <IconBtnContainer text={"8.1천"} iconName={"thumb_up"}></IconBtnContainer>
        <IconBtnContainer text={"싫어요"} iconName={"thumb_down"}></IconBtnContainer>
        <IconBtnContainer text={"145"} iconName={"comment"}></IconBtnContainer>
        <IconBtnContainer text={"공유"} iconName={"share"}></IconBtnContainer>
        <IconBtnContainer text={""} iconName={"more_vert"}></IconBtnContainer>
        <div>
          <img className="shorts-icons__img" src="assets/logo.png" />
        </div>
      </div>
    </main>
  );
}

export default ShortsView;
