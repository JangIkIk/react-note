import React, { useState } from "react";
import { _ } from "./contentStyle";
import { LikeCategoryList, useGetCategory } from "@entities/likeCategoryList";
import { VideoCard, useGetCardList } from "@entities/videoCard";

export const Content = () => {
  const [catrgory, setCategory] = useState<string>("");

  // 유저시청 알고리즘에 따른 버튼 리스트
  const buttonList = useGetCategory();

  // 유저시청 알고리즘에 따른 비디오 리스트
  const cardListFetchData = useGetCardList(catrgory);

  return (
    <_.content>
      <_.buttonContainer>
        <LikeCategoryList
          currentCategory={catrgory}
          selectCategory={setCategory}
          buttonList={buttonList}
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
