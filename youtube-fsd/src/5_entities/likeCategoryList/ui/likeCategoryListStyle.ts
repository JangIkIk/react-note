import styled from "styled-components";

const item = styled.div<{$active: boolean}>`
    background-color: ${({$active, theme}) => $active ? theme.highlight :theme.minor};
    color: ${({ $active, theme }) => $active ? theme.major :theme.highlight};
    font-size: ${({theme}) => theme.fontSize.sm};
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
    &:hover{
        background-color: ${({theme}) => theme.auxiliary};
    }
`;

export const _ = {
    item,
}