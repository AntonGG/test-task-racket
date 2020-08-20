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
  cursor: pointer;
  padding:5px;
  margin-left:3px;
  margin-right:3px;
  display: inline-block;
  border: 1px solid #e2e2e2;
  border-radius:4px;
  display: flex;
  justify-content: center;
  width: 23px
}

.previous {
  width: 50px !important
}

.next {
  width: 50px !important
}


ul.pagination li a {
  text-decoration: none;
  font-size: 14px;
}

ul.pagination li.active a {
  color: black;
}
ul.pagination li.active {
  background-color: #dedede;
}

ul.pagination li a:hover,
ul.pagination li a.active {
  color: blue;
}

`;

export const SelectPages = styled.select`
  padding: 4px;
  margin-left: 3px;
  margin-right: 3px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-size: 14px;
`;
