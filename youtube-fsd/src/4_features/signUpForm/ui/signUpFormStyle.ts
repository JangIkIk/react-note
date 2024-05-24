import styled from "styled-components";

const signUpForm = styled.div`
    width: 300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const regexText = styled.p`
    font-size: ${({theme})=> theme.fontSize.xs};
    color: ${({theme}) => theme.highlight};
`;
export const _ = {
    signUpForm,
    regexText
};