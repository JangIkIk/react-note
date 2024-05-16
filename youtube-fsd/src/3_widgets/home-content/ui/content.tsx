import React from "react";
import { _ } from "./contentStyle";
import { LikeCategoryList, useGetCategory } from "@entities/likeCategoryList";
import { VideoCard, useGetCardList } from "@entities/videoCard";

export const Content = () => {
  const [selectCategory, setSelectCategory, categoryList] = useGetCategory();
  const cardListFetchData = useGetCardList(selectCategory);


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
        {cardListFetchData && cardListFetchData.map((value)=>{
            return(
                <_.item key={value.id}>
                    <VideoCard data={value}/>
                </_.item>
            );
        })}
      </_.listContainer>
    </_.content>
  );
};
