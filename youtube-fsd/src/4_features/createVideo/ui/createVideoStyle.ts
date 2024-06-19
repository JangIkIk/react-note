import styled from "styled-components";

const createVideo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #00000069;
    color: ${({theme}) => theme.major};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    width: 500px;
    background-color: ${({theme}) => theme.highlight};
`;

export const _ = {
    createVideo,
    container
};