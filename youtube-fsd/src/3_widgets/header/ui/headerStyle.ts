import styled from "styled-components";

const header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 19px;
`;

const start = styled.div`
    width: 170px;
    display: flex;
    gap: 20px;
`

const center = styled.div`
    flex: 0 1 700px;
`

const end = styled.div`
    flex: 0 0 225px;
    display: flex;
    justify-content: flex-end;
`
const nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    cursor: pointer;

    & *{
      fill: ${({theme}) => theme.highlight};
    }
`

const logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  color: ${({ theme }) => theme.highlight};
`;

const logoImg = styled.img`
  width: 30px;
`;
const logoTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 600;
  letter-spacing: -1px;
`;
const logoLanguage = styled.span`
  font-size: 10px;
  align-self: flex-start;
`;

const guest = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & *{
    color: ${({theme}) => theme.highlight};
  }
`;
const guestMore = styled.div`
  cursor: pointer;
  position: relative;
  & *{
    fill: ${({theme}) => theme.highlight};
  }
`;
const guestLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border: 2px solid ${({theme})=> theme.minor};
  border-radius: 20px;
  cursor: pointer;
`;
const guestLoginIcon = styled.div`
  display: flex;
  & > svg {
    fill: #3ea6ff;
  }
`;

const guestLoginText = styled.span`
  color: #3ea6ff;
  font-weight: 600;
  font-size: ${({theme}) => theme.fontSize.xs};
`;

const member = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
`;

const memberIcons = styled.div`
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    &:hover{
        background-color: gray;
    }

`

export const _ = {
    header,
    start,
    center,
    end,
    nav,
    logo,
    logoImg,
    logoTitle,
    logoLanguage,
    guest,
    guestMore,
    guestLogin,
    guestLoginIcon,
    guestLoginText,
    member,
    memberIcons
}