import React, { memo } from "react";
import ReactPaginate from "react-paginate";
import { PaginateProps } from "../../types/PaginateProps";
import { PaginateContainer, ReactPaginateStyled } from "./styles";
const Paginate = memo<PaginateProps>((props) => {
  return (
    <PaginateContainer>
      <ReactPaginateStyled />
      <ReactPaginate
        previousLabel={"Назад"}
        nextLabel={"Вперед"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={props.pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data) => {
          props.setPage(data.selected);
        }}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
      <select
        value={props.countPosts}
        onChange={(event) => {
          props.setCountPosts(Number(event.target.value));
        }}
      >
        {[5, 10, 20, 30, 40, 50].map((v) => (
          <option>{v}</option>
        ))}
      </select>
    </PaginateContainer>
  );
});

export default Paginate;
