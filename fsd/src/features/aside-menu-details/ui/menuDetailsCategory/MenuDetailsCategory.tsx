import React from "react";
import "./menuDetailsCategory.css";
import { Icon } from "@app/components/icon/Icon";
import {CartegoryProps} from "./type";
import { useNavigate,useLocation } from "react-router-dom";


export const MenuDetailsCategory: CartegoryProps = (props) => {
  const { title, content } = props.data;
  const location = useLocation();
  const navigate = useNavigate();
  const onClickPath = (path: string) => navigate(path);
  

  return (
    <div className="cartegory">
      {title && <h3>{title}</h3>}
      {content &&
        content.map(( value, idx) => {
          return (
            <div key={idx} className={`cartegory__button ${location.pathname === value.router ? "cartegory__button--acive" : ""}`} onClick={()=>onClickPath(value.router)}>
              <Icon src={value.src} alt={value.name} />
              <p className="cartegory__text">{value.name}</p>
            </div>
          );
        })}
    </div>
  );
};
