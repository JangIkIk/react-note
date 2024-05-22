import styled from "styled-components";

const headerLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 56px;
  grid-template-columns: 64px;
  grid-template-areas:
    "header header header"
    "main main main"
    "main main main"
    "main main main";
  background-color: ${({ theme }) => theme.major};
`;
const header = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  top: 0;
  grid-area: header;
  z-index: 1;
`;
const main = styled.div`
  grid-area: main;
`;

export const _ = {
    headerLayout,
    header,
    main
};
