import React, { useEffect, useState } from "react";
import HomeView from "./HomeView.tsx";

export interface VideoList{
  id: number;
  videoImgUrl: string;
  videoUrl: string;
  videoName: string;
  videoViews: number;
  videoCreate: string;
  videoTime: string;
  accountImgUrl: string;
  accountUrl: string;
  accountName: string;
}

// 다른파일에서 import 커스텀훅 -> 


function HomeContainer() {
  const [videoList, setVideoList] = useState<VideoList[]>([]);

  useEffect(()=>{
    fetch("")
    .then( res => {
      // 이후 API 처리
      const listData = [
        {
          id: 1,
          videoImgUrl:
            "https://i.ytimg.com/vi/PENa-geh_XA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQGNqEYC3w82O5VPbQU8qL--QmLg",
          videoUrl: "https://www.youtube.com/watch?v=PENa-geh_XA&t=46s",
          videoName: "재알못도 무조건 아는 유명한 재즈곡 모음[재즈 Playlist]",
          videoViews: 763,
          videoCreate: "2014-04-14 09:00:00",
          videoTime: "59:02",
          accountImgUrl:
            "https://yt3.ggpht.com/ytc/AIf8zZS6A6yVq657F5JIiuD5t9X5K2-5IX8vNjIBcfsJhA=s68-c-k-c0x00ffffff-no-rj",
          accountUrl: "channel",
          accountName: "재즈기자 Jazz Editor",
        },
        {
          id: 2,
          videoImgUrl:
            "https://i.ytimg.com/vi/rRyMIssvr6M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1B3TPLKzjwEnLwHlin3-lwXdw8Q",
          videoUrl: "https://www.youtube.com/watch?v=rRyMIssvr6M",
          videoName:
            "『Playlist』 2021 버스커버스커 노래모음ㅣBest Songs of Busker Buskerㅣ🎯『광고제거가능』",
          videoViews: 500,
          videoCreate: "2013-04-14 12:00:00",
          videoTime: "1:14:06",
          accountImgUrl:
            "https://yt3.ggpht.com/J8EZuwS47_PgW74YoicdBgbfp5XcWa5VClobxkM7Hr3eWNkxEjGMOBqTpDyKiYQGvpnGO_c1=s68-c-k-c0x00ffffff-no-rj",
          accountUrl: "channel",
          accountName: "리스펙 뮤직 『Respect Music』",
        },
        {
          id: 3,
          videoImgUrl:
            "https://i.ytimg.com/vi/SVI-Y1asdAI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL3DBgI2uOocCOUFAnyY28gf9ycw",
          videoUrl: "https://www.youtube.com/watch?v=SVI-Y1asdAI",
          videoName:
            "[𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭] 외출 준비할 때 틀어놓기 좋은 감성힙합 모음 🎵🎶 I 릴러말즈, 지스트, 서동현, 한요한 + ..",
          videoViews: 1234,
          videoCreate: "2020-05-15 09:00:00",
          videoTime: "30:01",
          accountImgUrl:
            "https://yt3.googleusercontent.com/hIyipgDB-zeYDTuqvTgr8bn7Juf_y3qUPCGjZt_dCX9ND7JejeFHZWBpUITgpNlRxcLlgZkZoA=s176-c-k-c0x00ffffff-no-rj",
          accountUrl: "channel",
          accountName: "힙재 HIPJAE 🎵",
        },
        {
          id: 4,
          videoImgUrl:
            "https://i.ytimg.com/vi/TfMewKm_r20/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLC-qbAKXqG8vRxleJT4hzUlNm5QYQ",
          videoUrl: "https://www.youtube.com/watch?v=TfMewKm_r20",
          videoName:
            "[𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕] R&B부터 외힙느낌까지 Jay Park 박재범 노래모음",
          videoViews: 4567,
          videoCreate: "2020-06-15 09:00:00",
          videoTime: "01:28:01",
          accountImgUrl:
            "https://yt3.googleusercontent.com/oVlCgz2iHUwZQaFryJhVAAtuAPnJXPGwjDnzMSQGUNd9VZ09fKbEJM_pR63tlXPrukFYzI292g=s176-c-k-c0x00ffffff-no-rj",
          accountUrl: "channel",
          accountName: "에브리제이 EveryJ",
        },
        {
          id: 5,
          videoImgUrl:
            "https://i.ytimg.com/vi/2DS-2iHwts0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2AbWBlbnOIH7WdDptUhqCi-Lc_w",
          videoUrl: "https://www.youtube.com/watch?v=2DS-2iHwts0",
          videoName:
            "[#유퀴즈온더블럭] 오디션 합격 팁) 상대 배우랑 쌍방으로 욕 주고받기💥?! 작가&감독 내버려두고 마이웨이 연기해서 〈우리들의 블루스〉 합격한 박지환🤣ㅋㅋ #박지환",
          videoViews: 55555,
          videoCreate: "2024-01-15 09:00:00",
          videoTime: "27:01",
          accountImgUrl:
            "https://yt3.googleusercontent.com/eeO7_kj214ELzublhbUvImCcYJETn9xFquTTKI40G832A0deDvKz5h26UuRxbn41e7E9DUU23Q=s176-c-k-c0x00ffffff-no-rj",
          accountUrl: "channel",
          accountName: "디글 :Diggle",
        },
        {
          id: 6,
          videoImgUrl:
            "https://i.ytimg.com/vi/2bXk942QLrg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW9U8tR_EhOMyRI7oy38DQ3YvDQw",
          videoUrl: "https://www.youtube.com/watch?v=2bXk942QLrg",
          videoName:
            "힙합클럽 죽돌이들이 환장하는 힙합 MixsetㅣHip Hop MixsetㅣClub Hip HopㅣDj 6ix9ine",
          videoViews: 1234,
          videoCreate: "2020-05-15 09:00:00",
          videoTime: "30:01",
          accountImgUrl:
            "https://yt3.googleusercontent.com/npzBqOo0vw82eI1j631NECvSlTMGdehPG4dsxeiy2Pw3QYeLw_Me3YbVJ7hlxkCBl_08LQ5B=s176-c-k-c0x00ffffff-no-rj",
          accountUrl: "channel",
          accountName: "Dj 6ix9ine",
        },];
      setVideoList(listData)
    })
    .catch( err => console.log(err))
  },[])

  return (
    <HomeView videoList={videoList}/>
  );
}

export default HomeContainer;
