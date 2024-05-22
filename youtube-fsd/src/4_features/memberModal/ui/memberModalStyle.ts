import styled from "styled-components";

const modal = styled.div`
  position: absolute;
  color: ${({theme}) => theme.highlight};
  right: 0px;
  top: 57px;
  background-color: #282828;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
`;

const logout = styled.p`
    text-align: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    
    &:hover{
        background-color: gray;
    }
`;

export const _ = {
    modal,
    logout
}