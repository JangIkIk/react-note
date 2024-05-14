//package
import React from "react";
import styled from "styled-components";

// slice
// import { useGetSortButtonAtom } from "../../hooks/useGetSortButtonAtom";
// import { useSelectFilterAtom } from "../../hooks/useSelectFilterAtom";

export const SortBtns = () => {
  // const [state, _] = useGetSortButtonAtom();
  // const [__, setState] = useSelectFilterAtom();
  // const onClickFilter = (filterText: string) => setState(filterText)
  return (
    <></>
    // <Style_sortBtns>
    //   {state &&
    //     state.map((value, idx) => {
    //       return <div key={idx}>
    //         <Style_filterButton onClick={()=> onClickFilter(value)}>
    //             {value}
    //         </Style_filterButton>
    //       </div>;
    //     })}
    // </Style_sortBtns>
  );
};

const Style_sortBtns = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;
`;

const Style_filterButton = styled.div`
  padding: 10px 12px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({theme}) => theme.fontColor_main};
  border: none;
  border-radius: 10px;
  font-size: ${({theme}) => theme.fontSize.xs};
  cursor: pointer;
`;
