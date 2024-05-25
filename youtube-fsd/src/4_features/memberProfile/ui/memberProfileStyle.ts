import styled from "styled-components";

const member = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
`;

const memberIcons = styled.div`
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    &:hover{
        background-color: gray;
    }

`


export const _ = {
    member,
    memberIcons
};