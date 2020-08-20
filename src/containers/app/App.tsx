import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../../components/panel/Panel";
import Preloader from "../../components/preloader/Preloader";
import { RootState } from "../../store/reducers";
import { getData } from "../../store/reducers/panelReducer";
import { PanelPost } from "../../types/PanelPost";
import { Container, Title, GlobalStyle } from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector<RootState, PanelPost[]>(
    (state) => state.PanelReducer.panelPosts
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.App.isLoading
  );
  const getPanelPosts = useCallback(() => {
    const onGetData = () => {
      dispatch(getData());
    };
    onGetData();
  }, [dispatch]);

  useEffect(() => {
    getPanelPosts();
  }, [getPanelPosts]);

  return (
    <Container className="App">
      <GlobalStyle />
      <Title>Тестовое задание</Title>
      {isLoading ? <Preloader /> : <Panel panelPosts={posts} />}
    </Container>
  );
};

export default App;
