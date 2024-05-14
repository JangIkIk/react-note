import styled from "styled-components";
const moreModal = styled.div`
  position: absolute;
  right: 0;
  bottom: -340px;
  width: 300px;
  height: 330px;
  background-color: ${({theme}) => theme.major};
  border: 1px solid ${({theme}) => theme.minor};
  border-radius: 10px;
  color: ${({ theme }) => theme.highlight};
  font-family: sans-serif;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
`;

const buttonBox = styled.button`
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

const buttonName = styled.p`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: start;
`;

export const _ = {
    moreModal,
    buttonBox,
    buttonName
}
