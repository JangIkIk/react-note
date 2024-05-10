import styled from "styled-components";


const root = styled.div`
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

export const Style = {
    root,
    start,
    center,
    end,
};

