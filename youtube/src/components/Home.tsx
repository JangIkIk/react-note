import React from "react";
import "@css/home.css";
import HomeList from "./HomeList.tsx";

function Home() {
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
      accountUrl: "https://www.youtube.com/@jazzeditor",
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
      accountUrl: "https://www.youtube.com/@respectmusic6917",
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
      accountUrl: "https://www.youtube.com/@hipjae727",
      accountName: "힙재 HIPJAE 🎵",
    },
    {
      id: 4,
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
      accountUrl: "https://www.youtube.com/@hipjae727",
      accountName: "힙재 HIPJAE 🎵",
    },
    {
      id: 5,
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
      accountUrl: "https://www.youtube.com/@hipjae727",
      accountName: "힙재 HIPJAE 🎵",
    },
    {
      id: 6,
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
      accountUrl: "https://www.youtube.com/@hipjae727",
      accountName: "힙재 HIPJAE 🎵",
    },
  ];

  return (
    <main className="home">
      <div className="home-list">
        {listData && listData.map((value) => <HomeList key={value.id} itemInfo={value}/>)}
      </div>
    </main>
  );
}

export default Home;
