import React from "react";
import styled from "styled-components";

const SearchBar = (props) => {
  const { searchItem, count, item, setSearchItem } = props;

  return (
    <StyledBoxDiv>
      {searchItem ? (
        <p>
          Results for "{searchItem}" ( {count} )
        </p>
      ) : (
        <p>All Results ( {item.length} )</p>
      )}

      <br></br>
      <StyledInput
        type="text"
        placeholder="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      ></StyledInput>
    </StyledBoxDiv>
  );
};

const StyledBoxDiv = styled.div`
  margin-top: 5vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: ${props=>props.theme.color.primary};
  color: ${props=>props.theme.color.text};
`;

const StyledInput = styled.input`
  width: 100%;
  text-align: center;
  background: ${props=>props.theme.color.secundary};
  color: ${props=>props.theme.color.text};
  border-top: 1px solid ${props=>props.theme.color.tertiary};
  ::placeholder{
      color:${props=>props.theme.color.text};
  }
`;

export default SearchBar;
