import React from "react";
import { _ } from "./likeCategoryListStyle";
import type { ButtonsState } from "../types";

export const LikeCategoryList = (props: {categoryList: ButtonsState[], selectCategory: string, setSelectCategory: React.Dispatch<React.SetStateAction<string>>}) => {
  const {selectCategory, setSelectCategory, categoryList, } = props;
  const onClickSetCategory = (category: string) => {
    setSelectCategory(category);
  };

  return (
      <>
        {categoryList && categoryList.map((item)=>{
          return(
            <_.item
              key={item.id}
              $active={ selectCategory === item.category}
              onClick={()=>onClickSetCategory(item.category)}
            >{item.name}</_.item>
          );
        })}
      </>
  );
};
