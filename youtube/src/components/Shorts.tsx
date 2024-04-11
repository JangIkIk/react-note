import React from "react";
import "@css/shorts.css";

function Shorts() {
  return (
    <main className="shorts">
      <div className="shorts__video-frame">
        <video
          className="shorts__video"
          src="video/movie1.mp4"
          controls
          autoPlay
          loop
        ></video>
        <div className="shorts__info">
          <div className="shorts-account">
            <img className="shorts-account__img" src="assets/logo.png" />
            <span className="shorts-account__name">@계정이름</span>
            <button className="shorts-account__subscribe">구독</button>
          </div>
          <p className="shorts__content">등에 악마를 키우는 법</p>
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
