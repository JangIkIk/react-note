import React from "react";
import styled from "styled-components";
import logo from "@images/yotubeLogo.png";

export const Logo = () => {
  return (
    <Style_Logo>
      <Style_img src={logo} alt={`${logo}`} />
      <Style_title>YouTube</Style_title>
      <Style_language>KR</Style_language>
    </Style_Logo>
  );
};

const Style_Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

const Style_img = styled.img`
  width: 30px;
`;
const Style_title = styled.span`
  color: ${({ theme }) => theme.fontColor_main};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 600;
  letter-spacing: -1px;
`;
const Style_language = styled.span`
  color: ${({ theme }) => theme.fontColor_sub};
  font-size: 10px;
  align-self: flex-start;
`;
