import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function CatalogGameCard(props) {
  const { title, thumbnail, short_description, id } = props;
  const navigate = useNavigate();

  return (
    <StyledCardArticle
      onClick={() => {
        navigate(`/game/${id}`);
      }}
    >
      <StyledImg src={thumbnail} alt={title} />
      <StyledH1>{title}</StyledH1>
      <StyledTextDiv>{short_description}</StyledTextDiv>
      <StyledP>Click to learn more</StyledP>
    </StyledCardArticle>
  );
}

//Estilos
//---------------------------------

const StyledCardArticle = styled.article`
  border: 2px solid ${props=>props.theme.color.primary};
  background-color: ${props=>props.theme.color.secundary};
  color: ${props=>props.theme.color.text};
  border-radius: 5px;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  gap: 1%;
  transition: width 500ms, height 500ms;
  &:hover {
    width: 300px;
    height: 450px;
    box-shadow: rgba(255, 0, 0, 0.4) 5px 5px, rgba(255, 0, 0, 0.3) 10px 10px,
      rgba(255, 0, 0, 0.2) 15px 15px, rgba(255, 0, 0, 0.1) 20px 20px,
      rgba(255, 0, 0, 0.05) 25px 25px;
  }
`;

const StyledImg = styled.img`
  width: 95%;
  margin-top: 2.5%;
  border: 1px solid ${props=>props.theme.color.primary};
  border-radius: 5px;
`;

const StyledP = styled.p`
  font-weight: bold;
  border-top: 1px solid ${props=>props.theme.color.primary};
  width: 100%;
  text-align: center;
`;

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const StyledTextDiv = styled.div`
  height: 50%;
  width: 95%;
  font-size: 14px;
  text-align: center;
  overflow-y: hidden;
  
`;

//-------------------------------------

export default CatalogGameCard;
