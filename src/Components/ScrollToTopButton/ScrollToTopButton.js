import React from "react";
import styled from "styled-components";

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const ScrollToTopButton = () => {
  return (
    <>
      <StyledButton onClick={() => scrollTop()}>TOP</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 40px;
  right: 40px;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  transition: opacity 1s, border-radius 1s;
  opacity: 0.3;
  background-color: white;
  border-radius: 25%;

  :hover {
    background-color: black;
    color: white;
    opacity: 1;
    border-radius: 50%;
    border: 2px solid red;
  }
`;

export default ScrollToTopButton;
