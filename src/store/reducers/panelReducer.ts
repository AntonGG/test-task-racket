import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsFetch } from "../../services/post";
import { getUsersFetch } from "../../services/user";
import { PanelPost } from "../../types/PanelPost";

export const getData = createAsyncThunk("DATA/SET_DATA", async () => {
  const users = await getUsersFetch();
  const posts = await getPostsFetch();
  const panelPosts: PanelPost[] = posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return { post, user } as PanelPost;
  });
  return panelPosts;
});

const panelReducer = createSlice({
  name: "PanelReducer",
  initialState: {
    panelPosts: [] as PanelPost[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, actions) => {
      state.panelPosts = actions.payload;
    });
  },
});

const { reducer } = panelReducer;

export default reducer;
