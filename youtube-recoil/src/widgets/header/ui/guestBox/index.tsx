import React from "react";
import styled from "styled-components";

import { useOpenMore } from "../../hooks/useOpenMoreAtom";
import { MoreModal } from "../moreModal";

export const GuestBox = () => {
    const [open, setOpen] = useOpenMore();
    const clickModal = () => setOpen(!open);

  return (
    <Style_guest>
      <Style_more onClick={clickModal}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
        {open ? <MoreModal/> : ""}
      </Style_more>
      <Style_login>
        <Style_login_icon>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
        </Style_login_icon>
        <Style_login_text>로그인</Style_login_text>
      </Style_login>
    </Style_guest>
  );
};

const Style_guest = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & *{
    color: ${({theme}) => theme.fontColor_main};
  }
`;
const Style_more = styled.div`
  cursor: pointer;
  position: relative;
`;
const Style_login = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border: 2px solid ${({theme})=> theme.background_sub};
  border-radius: 20px;
  cursor: pointer;
`;
const Style_login_icon = styled.div`
  display: flex;
  & > svg {
    fill: #3ea6ff;
  }
`;

const Style_login_text = styled.span`
  color: #3ea6ff;
  font-weight: 600;
  font-size: ${({theme}) => theme.fontSize.xs};
`;
