import React from "react";
import "../index.css";
import {dateCalc} from "../../../utility/index.ts";
import {Link} from "react-router-dom";

// 파일 분류
// 페이지로 나눌경우 종속성이 없도록
interface ItemData {
  id:number;
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

function HomeList(props: {itemInfo: ItemData}) {
  const {
    id,
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
            <Link to={`/${id}`}>
              <img className="home-list__account-img" src={accountImgUrl}/>
            </Link>
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

export default HomeList;
