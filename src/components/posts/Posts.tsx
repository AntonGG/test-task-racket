import React, { memo } from "react";
import { PanelProps } from "../../types/PanelProps";
import { PostsItem, PostsContainer, LineWrap, PostsTitle } from "./styles";
const Posts = memo<PanelProps>((props) => {
  return (
    <PostsContainer>
      {props.panelPosts.map((v, i) => (
        <>
          <PostsItem>
            <PostsTitle>Имя</PostsTitle>
            <p>{v.user?.name}</p>
            <PostsTitle>Ник</PostsTitle>
            <p>{v.user?.username}</p>
          </PostsItem>
          {i % 4 === 0 && <LineWrap />}
        </>
      ))}
    </PostsContainer>
  );
});

export default Posts;
