import React from "react";
import "./menuDetails.css";
import { MenuDetailsCategory } from "./ui/menuDetailsCategory/MenuDetailsCategory";
import {menuBtnsData} from "./model/menuBtnsData";

export const MenuDetails = () => {
  return (
    <div className="menu-details">
        {menuBtnsData.map( (value, idx) => <MenuDetailsCategory key={idx} data={value}/>)}
    </div>
  );
};
