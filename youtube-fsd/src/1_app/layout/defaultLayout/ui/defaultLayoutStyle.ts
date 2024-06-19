import styled from "styled-components";

const defaultLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 56px;
  grid-template-columns: 64px;
  grid-template-areas:
    "header header header"
    "aside main main"
    "aside main main"
    "aside main main";
  background-color: ${({ theme }) => theme.major};
`;

const header = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  top: 0;
  grid-area: header;
  z-index: 1;
  background-color: ${({theme}) => theme.major};
`;

const aside = styled.div`
  position: fixed;
  width: 64px;
  top: 56px;
  bottom: 0;
  grid-area: aside;
`;

const main = styled.div`
  grid-area: main;
`;

export const _ = {
  defaultLayout,
  header,
  aside,
  main,
};
