import ReactPaginate from "react-paginate";
import styled, { createGlobalStyle } from "styled-components";

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReactPaginateStyled = createGlobalStyle`
 .pagination {
  justify-content: center;
  display:flex;
}

ul {
  list-style: none;
  padding: 0;
}

ul.pagination li {
  padding:5px;
  margin-left:3px;
  margin-right:3px;
  display: inline-block;
  border: 1px solid #e2e2e2;
  border-radius:10px;
  display: flex;
  justify-content: center;
}

ul.pagination li a {
  text-decoration: none;
  color: #337ab7;
  font-size: 25px;
}

ul.pagination li.active a {
  color: white;
}
ul.pagination li.active {
  background-color: #337ab7;
}

ul.pagination li a:hover,
ul.pagination li a.active {
  color: blue;
}

`;
