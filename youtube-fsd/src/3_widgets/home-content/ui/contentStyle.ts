import styled from "styled-components";

const content = styled.div`
  padding: 15px;
`;

const buttonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const listContainer = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 15px;
  flex-wrap: wrap;
`;
const item = styled.div`
  flex: 1 0 260px;
  margin-bottom: 15px;
`;

export const _ = {
  content,
  buttonContainer,
  listContainer,
  item,
};
