import React, { useEffect, useState } from "react";
import "@css/shorts.css";


interface VideoInfo{
  videoFile?: string;
  videoContent?: string;
  accountName?: string;
  accountImg?: string;
}

function Shorts() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({});

  useEffect(()=>{
    fetch("")
    .then( res => {
      // 이후 API 처리
      const videoData = {
        videoFile: "video/movie1.mp4",
        videoContent: "등에 악마룰 키우는법",
        accountName: "@계정이름",
        accountImg: "assets/logo.png",
      }
      setVideoInfo(videoData);
    })
    .catch( error => console.log(error))

  },[])

  
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
        <div className="short-icons__container">
          <div className="shorts-icons__action">
            <span className="material-symbols-outlined">thumb_up</span>
          </div>
          <div>
            <span>8.1천</span>
          </div>
        </div>

        <div className="short-icons__container">
          <div className="shorts-icons__action">
            <span className="material-symbols-outlined">thumb_down</span>
          </div>
          <div>
            <span>싫어요</span>
          </div>
        </div>

        <div className="short-icons__container">
          <div className="shorts-icons__action">
            <span className="material-symbols-outlined">comment</span>
          </div>
          <div>
            <span>145</span>
          </div>
        </div>

        <div className="short-icons__container">
          <div className="shorts-icons__action">
            <span className="material-symbols-outlined">share</span>
          </div>
          <div>
            <span>공유</span>
          </div>
        </div>

        <div className="short-icons__container">
          <div className="shorts-icons__action">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>

        <div>
          <img className="shorts-icons__img" src="assets/logo.png" />
        </div>
      </div>
    </main>
  );
}

export default Shorts;
