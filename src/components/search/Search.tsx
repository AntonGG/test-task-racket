import React, { memo } from "react";
import { SearchProps } from "../../types/SearchProps";
import { SearchContainer, SearchInput } from "./styles";
const Search = memo<SearchProps>((props) => {
  return (
    <SearchContainer>
      <SearchInput
        value={props.searchText}
        placeholder={"Search..."}
        onChange={(event) => props.setSearchText(event.target.value)}
        type="text"
      />
    </SearchContainer>
  );
});

export default Search;
