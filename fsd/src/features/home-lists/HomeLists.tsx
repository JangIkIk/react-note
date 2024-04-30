  import React from "react";
  import "./homeLists.css";
  import {useSortList} from "./hooks/useSortList";
  import {VideoList} from "@components/videoList/VideoList";
  
  export const HomeLists = () => {
    const data = useSortList();

    return (
      <div className="home-lists">
      {data && data.map((value)=> {
          return <div className="home-lists__item" key={value.id}><VideoList data={value}/></div>
      })}
    </div>
    );
  };