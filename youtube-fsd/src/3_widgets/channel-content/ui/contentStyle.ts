import styled from "styled-components";

const content = styled.div`
  width: 90%;
  color: ${({ theme }) => theme.auxiliary};
  margin: 0 auto;
`;
const banner = styled.div<{ $img: string }>`
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
`;
const title = styled.div`
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: bold;
`;
const accountContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const tap = styled.div`
  display: flex;
  gap: 30px;
`;

const tapItem = styled.div<{ $select: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-basis: 48px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({theme, $select}) => $select ? theme.highlight : theme.auxiliary};

  &::after{
    content: "";
    position: absolute;
    right: 0;
    bottom: 1px;
    left: 0;
    height: 2px;
    border-radius: 10px;
    background-color: ${({theme, $select}) => $select ? theme.highlight : theme.auxiliary};
    display: ${({$select}) => $select ? "block" : "none"};
  } 

  &:hover::after {
    display: block;
    background-color: ${({ theme }) => theme.auxiliary};
  }

  & > span{
    flex-shrink: 0;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
  }
`;


const line = styled.div`
  height: 1px;
  background-color: gray;
`;

// features로 빼야함
const subscribe = styled.button`
  width: 50px;
  border-radius: 20px;
  padding: 8px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.major};
  background-color: ${({ theme }) => theme.highlight};
`;

export const _ = {
  content,
  banner,
  info,
  profile,
  profile__img,
  container,
  title,
  accountContent,
  subscribe,
  tap,
  tapItem,
  line,
};
