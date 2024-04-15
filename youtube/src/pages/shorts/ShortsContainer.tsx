import React, { useEffect, useState, useRef } from "react";
import ShortsView from "./ShortsView.tsx";

export interface VideoInfo{
  id: number;
  videoFile?: string;
  videoContent?: string;
  accountName?: string;
  accountImg?: string;
}

function Container() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo[]>([]);
  // const scrollRef = useRef(null);
  // console.log(scrollRef)

  useEffect(()=>{
    fetch("")
    .then( res => {
      const videoData1 = [
        {
          id: 1,
          videoFile: "video/movie1.mp4",
          videoContent: "숏츠 1",
          accountName: "@숏츠 1",
          accountImg: "assets/logo.png",
        },
        {
          id: 2,
          videoFile: "video/movie1.mp4",
          videoContent: "숏츠 2",
          accountName: "@숏츠 2",
          accountImg: "assets/logo.png",
        },
      ]
      setVideoInfo(videoData1);
    })
    .catch( error => console.log(error))

  },[])

  
  return (
    <>
      {videoInfo && videoInfo.map((value )=>{
        return <ShortsView key={value.id} videoInfo={value}/>
      })}
    </>
  );
}

export default Container;
