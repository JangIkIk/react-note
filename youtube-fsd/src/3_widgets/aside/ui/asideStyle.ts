import styled from "styled-components";

const aside = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.highlight};
`;

const category = styled.div<{$currentpath: boolean}>`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({$currentpath}) => $currentpath && "gray"};
`;

const category_name = styled.p`
    font-size: ${({theme}) => theme.fontSize.xs};
`

const subscribeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & > img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  & > span{
    font-size: ${({theme}) => theme.fontSize.xs}
  }
`;

export const _ = {
  aside,
  category,
  category_name,
  subscribeList
};
