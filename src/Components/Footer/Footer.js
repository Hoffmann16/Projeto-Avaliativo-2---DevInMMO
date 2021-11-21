import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledH2>Dev in House</StyledH2>
        <StyledH2>DevinMMO </StyledH2>
        <StyledH2>Gabriel Hoffmann</StyledH2>
      </StyledFooter>
    </>
  );
};

const StyledFooter = styled.footer`
background-color:${props => props.theme.color.primary};
height:5vh;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding-left:1%;
padding-right:1%;
`

const StyledH2 = styled.h2`
color:${props => props.theme.color.text};
`

export default Footer;
