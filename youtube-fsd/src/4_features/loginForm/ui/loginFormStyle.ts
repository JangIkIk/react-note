import styled from "styled-components";

const loginForm = styled.div`
    margin: 0 auto;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({theme}) => theme.highlight};
    gap: 10px;
`;

const title = styled.h1`
    text-align: center;
    font-size: ${({theme})=> theme.fontSize.title};
`;

const inputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;


const buttonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;



export const _ = {
    loginForm,
    title,
    inputContainer,
    buttonsContainer
};