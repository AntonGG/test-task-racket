import { createSlice, AnyAction } from "@reduxjs/toolkit";

const appReducer = createSlice({
  name: "App",
  initialState: { isLoading: false, isError: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: AnyAction): action is AnyAction =>
        action.type.endsWith("fulfilled"),
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      (action: AnyAction): action is AnyAction =>
        action.type.endsWith("pending"),
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      (action: AnyAction): action is AnyAction =>
        action.type.endsWith("rejected"),
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
      }
    );
  },
});

const { reducer } = appReducer;

export default reducer;
