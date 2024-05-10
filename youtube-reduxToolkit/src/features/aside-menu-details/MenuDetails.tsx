import React from "react";
import "./menuDetails.css";
import { MenuDetailsCategory } from "./ui/menuDetailsCategory/MenuDetailsCategory";
import {menuBtnsData} from "./model/menuBtnsData";

/*
  수정필요(css)
  스크롤 기능인 불가능함,
  화면이 커질때 사이드메뉴가 짤림
  컴포넌트를 굳이 나눠야하나 ?
*/ 
export const MenuDetails = () => {
  return (
    <div className="menu-details">
        {menuBtnsData.map( (value, idx) => <MenuDetailsCategory key={idx} data={value}/>)}
    </div>
  );
};
