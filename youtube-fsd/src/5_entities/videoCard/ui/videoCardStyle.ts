import styled from "styled-components";

const videoCard = styled.div`
    color: ${({theme}) => theme.highlight};
`;

const preview = styled.div`
    position: relative;
`;

const previewImg = styled.img`
    width: 100%;
    vertical-align: bottom;
    border-radius: 15px;
`;

const previewTime = styled.span`
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: ${({theme}) => theme.major};
    padding: 4px 6px;
    font-size: ${({theme}) => theme.fontSize.xs};
    border-radius: 10px;
`;

const info = styled.div`
    display: flex;
    gap: 5px;
    padding-top: 12px;
`;
const channel = styled.div`
    width: 36px;
    margin-right: 10px;
    flex-shrink: 0;
`;
const channelImg = styled.img`
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
`;

const content = styled.div`
    font-size: ${({theme}) => theme.fontSize.xs};
    color: ${({theme}) => theme.auxiliary};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-right: 10px;
`;
const title = styled.h3`
    font-size: ${({theme}) => theme.fontSize.base};
    color: ${({theme}) => theme.highlight};
    overflow: hidden;
    display: -webkit-box; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
const createDay = styled.span`
    content: "•";
`;

export const _ = {
    videoCard,
    preview,
    previewImg,
    previewTime,
    info,
    channel,
    channelImg,
    content,
    title,
    createDay,
}