import styled from "styled-components";

const search = styled.div`
  display: flex;
  padding-left: 40px;
  gap: 20px;
  height: 35px;

  & *{
    fill: ${({theme}) => theme.highlight};
  }
`;

const searchContainer = styled.div`
  flex-grow: 1;
  border: 1px solid ${({theme}) => theme.minor};
  border-radius: 20px;
  padding-left: 10px;
  display: flex;
`;
const searchBox = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 5px;
  padding: 0 4px;
  align-items: center;
  & *{
    fill: ${({theme}) => theme.highlight};
  }
`;
const searchInput = styled.input`
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.highlight};
  outline: none;
`;
const searchButton = styled.button`
  border: none;
  background-color: ${({theme}) => theme.minor};
  border-radius: 0 20px 20px 0;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;
const searchMic = styled.button`
  border: none;
  border-radius: 50%;
  background-color: ${({theme}) => theme.minor};
  display: flex;
  align-items: center;
`;

export const _ = {
    search,
    searchContainer,
    searchBox,
    searchInput,
    searchButton,
    searchMic,
}

