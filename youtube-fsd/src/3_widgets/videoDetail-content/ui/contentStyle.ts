import styled from "styled-components";

const videoDetail = styled.div`
    color: ${({theme}) => theme.highlight};
    margin: 0 auto;
    width: 80%;
    padding: 20px;
    
`;
const thumbnail = styled.div`
    width: 100%;
    height: 400px;
`;
const thumbnailImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;
const title = styled.h2`
    padding: 10px 0;
    font-size: ${({theme}) => theme.fontSize.title};
`;
const info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    background-color: ${({theme}) => theme.auxiliary};
    border-radius: 10px;
    padding: 10px;
`;
const channelImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;

const videoContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & * {
        font-weight: bold;
        color: ${({theme}) => theme.major};
    }
`;

export const _ = {
    videoDetail,
    thumbnail,
    thumbnailImg,
    title,
    info,
    channelImg,
    videoContent,
}