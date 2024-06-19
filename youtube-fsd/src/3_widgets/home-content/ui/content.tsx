import React from "react";
import { _ } from "./contentStyle";
import { LikeCategoryList, useGetCategory } from "@entities/likeCategoryList";
import { VideoCard, useGetCardList } from "@entities/videoCard";

export const Content = () => {
  const [selectCategory, setSelectCategory, categoryList] = useGetCategory();
  const [cardList] = useGetCardList();


  return (
    <_.content>
      <_.buttonContainer>
        <LikeCategoryList
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          categoryList={categoryList}
        />
      </_.buttonContainer>

      <_.listContainer>
        {cardList && cardList.map((value)=>{
            return(
                <_.item key={value.idx}>
                    <VideoCard data={value}/>
                </_.item>
            );
        })}
      </_.listContainer>
    </_.content>
  );
};
