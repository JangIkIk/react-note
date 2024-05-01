import React from "react";
import "./menuDetailsCategory.css";
import { Icon } from "@app/components/icon/Icon";
import {CartegoryProps} from "./type";


export const MenuDetailsCategory: CartegoryProps = (props) => {
  const { title, content } = props.data;
  return (
    <div className="cartegory">
      {title && <h3>{title}</h3>}
      {content &&
        content.map(( value, idx) => {
          return (
            <div key={idx} className="cartegory__button">
              <Icon src={value.src} alt={value.name} />
              <p className="cartegory__text">{value.name}</p>
            </div>
          );
        })}
    </div>
  );
};
