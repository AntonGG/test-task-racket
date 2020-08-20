import React, { memo } from "react";
import { PostProps } from "../../types/PostProps";
import {
  PostContainer,
  PostChildContainer,
  AuthorContainer,
  TextBold,
} from "./styles";

const Post = memo<PostProps>((props) => {
  return (
    <PostContainer onClick={() => props.close()}>
      <PostChildContainer>
        <AuthorContainer>
          <TextBold>{props.panelPost.user.name}</TextBold>
          <p>{props.panelPost.user.email}</p>
          <p>{props.panelPost.user.phone}</p>
        </AuthorContainer>
        <div>
          <p>{props.panelPost.post.title}</p>
          <p>{props.panelPost.post.body}</p>
        </div>
      </PostChildContainer>
    </PostContainer>
  );
});

export default Post;
