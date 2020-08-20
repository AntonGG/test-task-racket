import styled from "styled-components";

export const PostContainer = styled.div`
  flex-direction: column;
  background: #f5f5f59c;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostChildContainer = styled.div`
  flex-direction: column;
  background: #ececec;
  width: 600px;
  display: flex;
  /* justify-content: center;
  align-items: center;*/
  text-align: center; 
  border-radius: 10px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const TextBold = styled.p`
  font-weight: bold;
`;
