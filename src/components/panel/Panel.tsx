import React, { FC, memo, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PanelPost } from "../../types/PanelPost";
import { PanelProps } from "../../types/PanelProps";
import Paginate from "../paginate/Paginate";
import Posts from "../posts/Posts";
import Search from "../search/Search";
import { PanelContainer } from "./styles";
const recursiveFind = (object: Object, text: string): boolean => {
  return Object.values(object).some((value) => {
    if (value.toString().indexOf(text) > -1) {
      return true;
    }
    if (typeof value === "object") {
      return recursiveFind(value, text);
    }
    return false;
  });
};

const searchPosts = (posts: PanelPost[], text: string): PanelPost[] => {
  if (text === "") {
    return posts;
  }
  return posts.filter((post) => recursiveFind(post, text));
};

const Panel = memo<PanelProps>((props) => {
  //пагинация
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [countPosts, setCountPosts] = useState(5);
  const onSetPage = (num: number) => {
    setPage(num);
  };
  const onSetCountPosts = (count: number) => {
    setCountPosts(count);
  };

  //поиск
  const [resultPosts, setResultPosts] = useState([] as PanelPost[]);
  const [searchText, setSearchText] = useState("");
  const onSetSearchText = (text: string) => {
    setSearchText(text);
    setPage(0);
  };

  useEffect(() => {
    const searchedPosts = searchPosts(props.panelPosts, searchText);
    const pages = Math.floor(searchedPosts.length / countPosts);
    setPages(pages);

    if (page === 0) {
      setResultPosts(searchedPosts.slice(0, countPosts));
    } else if (page > 0) {
      setResultPosts(
        searchedPosts.slice(page * countPosts, page * countPosts + countPosts)
      );
    }
  }, [page, searchText, countPosts, props]);

  return (
    <PanelContainer>
      <Search searchText={searchText} setSearchText={onSetSearchText} />
      <Posts panelPosts={resultPosts} />
      <Paginate
        page={page}
        pages={pages}
        countPosts={countPosts}
        setPage={onSetPage}
        setCountPosts={onSetCountPosts}
      />
    </PanelContainer>
  );
});

export default Panel;
