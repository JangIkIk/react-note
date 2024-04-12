import React, { useEffect, useState } from "react";
import "@css/channel.css";

interface ChannelData{
  banner?: string;
  profile?: string;
  name?: string;
  account?: string;
  subscriber?: number;
  video?: number
}

function Channel() {
  const [channelData, setChannelData] = useState<ChannelData>({});

  useEffect(()=>{
    fetch("")
    .then( res => {
      // 이후 api 처리
      const ChannelData = {
        banner: "https://yt3.googleusercontent.com/lhGZkOWfel8lH3qBQhm-lHWWfDCyae-ZbhLQHKZBEclP0rBLqYXiO9BwzHnhuGcKuPDYk2ZgdgM=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        profile: "https://yt3.googleusercontent.com/lhGZkOWfel8lH3qBQhm-lHWWfDCyae-ZbhLQHKZBEclP0rBLqYXiO9BwzHnhuGcKuPDYk2ZgdgM=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        name: "만두뮤직 - 노래 모음 채널",
        account: "@user-id3dt1rh6s",
        subscriber: 2500,
        video: 166,
      }
      setChannelData(ChannelData);
      return 
    })
    .catch( error => console.log(error))
  },[])

  

  return (
    <div className="user-channel">
      <div className="user-channel__container">
        
        <div className="user-channel__banner" style={{backgroundImage:channelData.banner}}></div>

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
      </div>

      <div className="user-channel__line"></div>

      <div className="user-channel__tap">
        <p>탭창 라인</p>
      </div>
    </div>
  );
}

export default Channel;
