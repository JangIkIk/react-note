// package
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

// slice
import { TapContent } from "../tap-content";
import { buttonData } from "../../model/buttonData";

export const Tap = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const onClickRoute = (path: string) => navigate(path);
    

  return (
    <>
      <Style_tap>
        <Style_container>
          {buttonData &&
            buttonData.map((value, idx) => {
                console.log(location.pathname);
                console.log(location.pathname + value.pathname);
              return (
                <Style_button key={idx} onClick={()=> onClickRoute(value.pathname)}>
                  <Style_button__name $path={location.pathname === location.pathname + value.pathname}>{value.name}</Style_button__name>
                  {location.pathname === location.pathname + value.pathname ? <Style_button__line /> : ""}                  
                </Style_button>
              );
            })}
        </Style_container>
        <Style_tap__line />
      </Style_tap>
      <TapContent/>
    </>
  );
};

const Style_tap = styled.div``;
const Style_container = styled.div`
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.fontColor_main};
  width: 90%;
  margin: 0 auto;
`;
const Style_button = styled.div`
  position: relative;
`;
const Style_button__name = styled.p<{$path: boolean}>`
  text-align: center;
  padding: 10px;
  min-width: 48px;
  cursor: pointer;
  color: ${({theme, $path})=> $path ? "red" : "blue"};
`;
const Style_button__line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid ${({ theme }) => theme.fontColor_main};
  border-radius: 1px;
`;
const Style_tap__line = styled.div`
  border-radius: 1px;
  border-bottom: 1px solid gray;
`;
