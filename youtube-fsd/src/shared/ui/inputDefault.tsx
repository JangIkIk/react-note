import React, { InputHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

type InputDefaultProps = InputHTMLAttributes<HTMLInputElement>
export const InputDefault = forwardRef<HTMLInputElement, InputDefaultProps>((props, ref) => {
    const attribute = props;
    return (
        <_.inputDefault {...attribute} ref={ref} />
    );
});

const inputDefault = styled.input`
    padding: 6px;
    height: 40px;
    border: none;
    border-radius: 10px;
    width: 100%;
`;

const _ = {
    inputDefault,
};
