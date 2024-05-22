import React from "react";
import styled from "styled-components";

type ButtonDefaultProps = {
    text: string,
    onClick?: () => void;
};

export const ButtonDefault = (props: ButtonDefaultProps)=>{
    const {text, onClick} = props;
    return(
        <_.buttonDefault onClick={onClick}>
            {text}
        </_.buttonDefault>
    );
}

const buttonDefault = styled.button`
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
`;

const _ = {
    buttonDefault
}