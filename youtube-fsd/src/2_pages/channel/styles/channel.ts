import styled from "styled-components";

const channel = styled.div`
    width: 90%;
    color: ${({theme}) => theme.fontColor_main};
    margin: 0 auto;
`;
const banner = styled.div<{$img:string}>`
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.$img});
    border-radius: 15px;
    height: 150px;

`;
const info = styled.div`
    display: flex;
    padding: 20px 0px;
    gap: 20px;
`;
const profile = styled.div`
    width: 130px;
    flex-shrink: 0;
`;
const profile__img = styled.img`
    width: 100%;
    border-radius: 50%;
`;
const container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.fontColor_main};
`;
const title = styled.div`
    font-size: ${({theme}) => theme.fontSize.title};
    font-weight: bold;
    color: ${({theme}) => theme.fontColor_main};
`;
const content = styled.div`
    font-size: ${({theme}) => theme.fontSize.xs};
`;
const subscribe = styled.button`
    width: 50px;
    border-radius: 20px;
    padding: 8px;
    border: none;
    cursor: pointer;
`;

export const Style = {
    channel,
    banner,
    info,
    profile,
    profile__img,
    container,
    title,
    content,
    subscribe,
}