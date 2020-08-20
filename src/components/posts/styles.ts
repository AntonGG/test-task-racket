import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 820px;
`;
export const PostsItem = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const PostsTitle = styled.p`
  color: #9a9797;
  margin-bottom:0`;
export const LineWrap = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`;
