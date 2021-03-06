import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 840px;
`;
export const PostsItem = styled.div`
  width: 190px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    background: #dadada;
  }
`;
export const PostsTitle = styled.p`
  color: #9a9797;
  margin-bottom: 0;
  font-size: 14px;
`;
export const PostsTitleName = styled.p`
  margin-top: 5px;
`;
