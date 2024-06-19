import styled, {keyframes} from "styled-components";

const subscribe = styled.button<{$active:boolean}>`
  width: 100px;
  border-radius: 20px;
  padding: 8px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.major};
  background-color: ${({ theme, $active }) => $active ? theme.highlight : theme.auxiliary};
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const subscribeText = styled.div<{$active:boolean}>`
  opacity: 0;
  position: fixed;
  background-color: ${({theme}) => theme.highlight};
  left: 10px;
  bottom: 10px;
  padding: 10px;
  color: ${({theme}) => theme.major};
  border-radius: 10px;
`;



export const _ = {
    subscribe,
    subscribeText
};