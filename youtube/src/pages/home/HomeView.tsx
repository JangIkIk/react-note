import React from "react";
import "./index.css";
import {VideoList} from "./HomeContainer.tsx";
import HomeList from "./components/HomeList.tsx";

function HomeView(props: {videoList: VideoList[]}) {
  const {videoList} = props;
  return (
    <main className="home">
        {videoList && videoList.map((value) => <HomeList key={value.id} itemInfo={value} />)}
    </main>
  );
}

export default HomeView;
