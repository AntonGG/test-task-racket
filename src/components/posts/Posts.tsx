import React, { memo, useState } from "react";
import { PanelProps } from "../../types/PanelProps";
import Post from "../post/Post";
import {
  PostsItem,
  PostsContainer,
  PostsTitle,
  PostsTitleName,
} from "./styles";
const Posts = memo<PanelProps>((props) => {
  const [currentPost, setCurrentPost] = useState(props.panelPosts[0]);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const closePost = () => {
    setIsOpenPost(false);
  };
  return (
    <PostsContainer>
      {isOpenPost && <Post close={closePost} panelPost={currentPost} />}
      {props.panelPosts.map((v, i) => (
        <PostsItem
          key={i}
          onClick={() => {
            setCurrentPost(v);
            setIsOpenPost(true);
          }}
        >
          <PostsTitle>Имя</PostsTitle>
          <PostsTitleName>{v.user?.name}</PostsTitleName>
          <PostsTitle>Ник</PostsTitle>
          <PostsTitleName>{v.user?.username}</PostsTitleName>
        </PostsItem>
      ))}
    </PostsContainer>
  );
});

export default Posts;
