import React from "react";
import styled from "styled-components";

function NewsCard(props) {
  const { title, thumbnail, short_description, article_url } = props;
  return (
    <StyledCardArticle>
      <StyledImg src={thumbnail} alt={title} />
      <StyledDiv>
        <StyledH1>{title}</StyledH1>
        <StyledTextDiv>{short_description}</StyledTextDiv>
      </StyledDiv>
      <StyledA href={article_url} target="_blank">
        Read More
      </StyledA>
    </StyledCardArticle>
  );
}

//Estilos
//---------------------------------------

const StyledCardArticle = styled.article`
  border: 2px solid ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.secundary};
  border-radius: 5px;
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
  gap: 1%;
  color:${props => props.theme.color.text};
`;

const StyledImg = styled.img`
  height: 95%;
  margin-left: 0.5%;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 5px;
`;

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

const StyledTextDiv = styled.div`
  height: 40%;
  width: 100%;
  height: 50%;
  font-size: 16px;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 60%;
`;

const StyledA = styled.a`
  width: 5%;
  height: 25%;
  text-align: center;
  text-decoration: none;
  align-self: flex-end;
  color: ${props => props.theme.color.text};
  border-top-left-radius:5px;
  border-left: 1px ${props => props.theme.color.primary} solid;
  border-top: 1px ${props => props.theme.color.primary} solid;
  :hover {
    background-color: ${props => props.theme.color.primary};
  }
`;
//---------------------------------------

export default NewsCard;
