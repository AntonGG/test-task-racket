import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../../components/panel/Panel";
import { RootState } from "../../store/reducers";
import { getData } from "../../store/reducers/panelReducer";
import { PanelPost } from "../../types/PanelPost";
import { Container } from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector<RootState, PanelPost[]>(
    (state) => state.PanelReducer.panelPosts
  );

  const getPanelPosts = useCallback(() => {
    const onGetData = () => {
      dispatch(getData());
    };
    onGetData();
  }, [dispatch]);

  useEffect(() => {
    getPanelPosts();
  }, []);

  return (
    <Container className="App">
      <p>Тестовое задание</p>
      <Panel panelPosts={posts} />
    </Container>
  );
};

export default App;
