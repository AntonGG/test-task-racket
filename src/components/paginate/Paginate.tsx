import React, { memo } from "react";
import ReactPaginate from "react-paginate";
import { PaginateProps } from "../../types/PaginateProps";
import { PaginateContainer, ReactPaginateStyled, SelectPages } from "./styles";
const Paginate = memo<PaginateProps>((props) => {
  console.log("pages, page", props.pages, props.page);

  return (
    <PaginateContainer>
      <ReactPaginateStyled />
      <ReactPaginate
        previousLabel={"Назад"}
        nextLabel={"Вперед"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        forcePage={props.page}
        pageCount={props.pages}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={(data) => {
          props.setPage(data.selected);
        }}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
      <SelectPages
        value={props.countPosts}
        onChange={(event) => {
          props.setCountPosts(Number(event.target.value));
        }}
      >
        {[5, 10, 20, 30, 40, 50].map((v) => (
          <option>{v}</option>
        ))}
      </SelectPages>
    </PaginateContainer>
  );
});

export default Paginate;
