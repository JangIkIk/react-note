import React from "react";
import { _ } from "./likeCategoryListStyle";
import type { ButtonsState } from "../types";

export const LikeCategoryList = (props: {buttonList: ButtonsState[], currentCategory: string, selectCategory: React.Dispatch<React.SetStateAction<string>>}) => {
  const {buttonList, currentCategory, selectCategory} = props;
  const onClickSetCategory = (category: string) => {
    selectCategory(category);
  };

  return (
      <>
        {buttonList && buttonList.map((value)=>{
          return(
            <_.item
              key={value.id}
              $active={ currentCategory === value.category}
              onClick={()=>onClickSetCategory(value.category)}
            >{value.name}</_.item>
          );
        })}
      </>
  );
};
