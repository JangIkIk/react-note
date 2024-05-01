import React from "react";
import "./sortBtns.css";
import {FilterButton} from "@components/filterButton/FilterButton";
import {useGetSortList} from "@features/home-sort-btns/hooks/useGetSortList";
import { useAppDispatch, useAppSelector } from "@app/state/store";
import { changeValue } from "@state/home-sort-slice";

/*
    필터버튼의 기능은 유튜브로 예를 들면 유저가 많이 보는 리스트의 카테고리에 따라
    생성되는것 같다. 하지만, 현재는 더미데이터를 사용하므로
    커스텀훅에서 생성한 리스트의 카테고리를 가져와 반환해주는 형태로 작성을하면 될것 같다.
*/
export const SortBtns = ()=>{
    const category = useGetSortList();
    const dispatch = useAppDispatch();
    const selector = useAppSelector( state => state.HomeSortSlice.value);

    const clickSortBtn = (text: string) => dispatch(changeValue(text));
    return(
        <div className="sort-btns">
            {category && category.map( (value,idx) => {
                return(
                    <div key={idx} onClick={ () => clickSortBtn(value)}><FilterButton active={selector === value}>{value}</FilterButton></div>
                );
            })}
        </div>
    );
}