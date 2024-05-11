import React from "react";
import styled from "styled-components";


export const Search = () => {
  return (
    <Style_search>
      <Style_container>
        <Style_box>
            <Style_box__input placeholder="검색"/>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm160-120h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Z"/></svg>
        </Style_box>
        <Style_box__button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </Style_box__button>
      </Style_container>
      <Style_button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"/></svg>
      </Style_button>
    </Style_search>
  );
};

const Style_search = styled.div`
  display: flex;
  padding-left: 40px;
  gap: 20px;
  height: 35px;

  & *{
    fill: ${({theme}) => theme.fontColor_main};
  }
`;
const Style_container = styled.div`
  flex-grow: 1;
  border: 1px solid ${({theme}) => theme.background_sub};
  border-radius: 20px;
  padding-left: 10px;
  display: flex;
`;
const Style_box = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 5px;
  padding: 0 4px;
  align-items: center;
`;
const Style_box__input = styled.input`
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.fontColor_main};
  outline: none;
`;
const Style_box__button = styled.button`
  border: none;
  background-color: ${({theme}) => theme.background_sub};
  border-radius: 0 20px 20px 0;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;
const Style_button = styled.button`
  border: none;
  border-radius: 50%;
  background-color: ${({theme}) => theme.background_sub};
  display: flex;
  align-items: center;
`;
