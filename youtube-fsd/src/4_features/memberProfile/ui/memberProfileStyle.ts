import styled from "styled-components";


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
const memberImg = styled.img<{size?: number}>`
    width: ${({size}) => size ? size : 24}px;
    height: ${({size}) => size ? size : 24}px;
    border-radius: 50%;
`;

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

const modalButton = styled.p`
    text-align: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    
    &:hover{
        background-color: gray;
    }
`;

const profileImgModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #0000007d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const profileImgContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${({theme}) => theme.auxiliary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;


export const _ = {
    memberIcons,
    memberImg,
    modal,
    modalButton,
    profileImgModal,
    profileImgContainer
};