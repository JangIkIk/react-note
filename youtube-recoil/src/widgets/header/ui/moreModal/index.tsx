import React from "react";
import styled from "styled-components";

import { useChangeTheme } from "../../hooks/useChangeThemeAtom";

export const MoreModal = () => {
  const [_, setMode] = useChangeTheme();
  const onClickMode = (modeValue: string) => setMode(modeValue);
  const textData = [
    {
      name: "테마: 다크모드",
      mode: "dark"
    },
    {
      name: "테마: 라이트모드",
      mode: "light"
    }
  ];
  return (
    <Style_moreModal>
      {textData.map((value, idx) => {
        return (
          <Style_buttonBox key={idx} onClick={()=>onClickMode(value.mode)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
            </svg>
            <Style_buttonName>{value.name}</Style_buttonName>
          </Style_buttonBox>
        );
      })}
    </Style_moreModal>
  );
};


const Style_moreModal = styled.div`
  position: absolute;
  right: 0;
  bottom: -340px;
  width: 300px;
  height: 330px;
  background-color: ${({theme}) => theme.background_main};
  border: 1px solid ${({theme}) => theme.background_sub};
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor_main};
  font-family: sans-serif;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
`;

const Style_buttonBox = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: gray;
  }
`;

const Style_buttonName = styled.p`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: start;
`;
