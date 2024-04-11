import React from "react";
import "@css/home.css";
import {dateCalc} from "../utility/index.ts";


interface ItemData {
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

function ItemList(props: {itemInfo: ItemData}) {
  const {
    videoImgUrl,
    videoUrl,
    videoName,
    videoViews,
    videoCreate,
    videoTime,
    accountImgUrl,
    accountUrl,
    accountName,
  } = props.itemInfo;
  return (
    <div className="home-list__item">
        <div className="home-list__thumbnail">
            <a href={videoUrl}>
              <img className="home-list__img" src={videoImgUrl}/>
              <span className="home-list__play-time">{videoTime}</span>
            </a>
        </div>

        <div className="home-list__info">

          <div className="home-list__account">
            <a href={accountUrl}>
              <img className="home-list__account-img" src={accountImgUrl}/>
            </a>
          </div>

          <div className="home-list__text">
            <div>
              <a className="homs-list__title" href={videoUrl}>{videoName}</a>
            </div>
            <div className="home-list__content">
              <a className="home-list__account-name" href={accountUrl}>{accountName}</a>
              <span className="home-list__view">{`조회수 ${videoViews} • ${dateCalc(videoCreate)}`}</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ItemList;
