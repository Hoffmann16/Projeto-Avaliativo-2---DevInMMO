import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {paginaAtual,link1} = props
  return (
    <>
      <StyledHeader>
        <StyledH1>DEVinMMO</StyledH1>
        <StyledH2>{paginaAtual}</StyledH2>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to={`/${link1.toLowerCase()}`}>{link1}</StyledLink>
        </StyledNav>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5vh;
  width: 100%;
  position: fixed;
  background-color: ${props=>props.theme.color.primary};
  align-items: center;
`;
const StyledH1 = styled.h1`
  font-size: 36px;
  color: ${props=>props.theme.color.text};
  margin-left: 20px;
`;
const StyledH2 = styled.h2`
  font-size: 26px;
  color: ${props=>props.theme.color.text};
`;
const StyledNav = styled.nav`
  color: ${props=>props.theme.color.text};
  border: 1px solid ${props=>props.theme.color.text};
  display: flex;
  gap: 25px;
  margin-right: 20px;
`;
const StyledLink = styled(Link)`
  color: ${props=>props.theme.color.text};
`;

export default Header;
