import React, { useState } from "react";
import styled from "styled-components";
import { Formulary } from "..";

const GameCard = (props) => {
  const {
    screenshots,
    minimum_system_requirements,
    developer,
    publisher,
    release_date,
    genre,
    short_description,
    gameId
  } = props;

  const [idImage, setIdImage] = useState(screenshots[0].id);

  const handlerSmallImg = () => {
    return screenshots
      .filter((x) => x.id !== idImage)
      .map((item) => (
        <StyledSmallImg
          key={item.id}
          onClick={() => {
            setIdImage(item.id);
          }}
          src={item.image}
        />
      ));
  };

  return (
    <>
      <StyledBoxDiv>
        <StyledImageBoxDiv>
          <StyledBigImg
            src={screenshots.find((item) => item.id === idImage).image}
          />
          {handlerSmallImg()}
        </StyledImageBoxDiv>
        <StyledInfoDiv>
          <StyledSystemDiv>
            <StyledH6>Minimum System Requirements</StyledH6>
            <ul>
              <li>
                <StyledTextSpam>Graphics : </StyledTextSpam>
                {minimum_system_requirements?.graphics}
              </li>
              <li>
                <StyledTextSpam>Memory : </StyledTextSpam>
                {minimum_system_requirements?.memory}
              </li>
              <li>
                <StyledTextSpam>Os : </StyledTextSpam>
                {minimum_system_requirements?.os}
              </li>
              <li>
                <StyledTextSpam>Processor : </StyledTextSpam>
                {minimum_system_requirements?.processor}
              </li>
              <li>
                <StyledTextSpam>Storage : </StyledTextSpam>
                {minimum_system_requirements?.storage}
              </li>
            </ul>
          </StyledSystemDiv>
          <StyledOtherInfoDiv>
            <StyledOtherInfoP>
              <StyledTextSpam>Developer : </StyledTextSpam>
              {developer}
            </StyledOtherInfoP>
            <StyledOtherInfoP>
              <StyledTextSpam>Publisher : </StyledTextSpam>
              {publisher}
            </StyledOtherInfoP>
            <StyledOtherInfoP>
              <StyledTextSpam>Release Date : </StyledTextSpam>
              {release_date}
            </StyledOtherInfoP>
            <StyledOtherInfoP>
              <StyledTextSpam>Genre : </StyledTextSpam>
              {genre}
            </StyledOtherInfoP>
          </StyledOtherInfoDiv>
          <StyledDescriptionDiv>{short_description}</StyledDescriptionDiv>
        </StyledInfoDiv>

        <Formulary gameId={gameId}></Formulary>
      </StyledBoxDiv>
    </>
  );
};

const StyledBoxDiv = styled.div`
  background-color: ${(props) => props.theme.color.text};
  border: 2px solid ${(props) => props.theme.color.secundary};
  width: 95vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
  flex-wrap: wrap;
`;
const StyledImageBoxDiv = styled.div`
  width: 60%;
  height: 60%;
  background-color: ${(props) => props.theme.color.secundary};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: flex-end;
`;

const StyledBigImg = styled.img`
  width: 80%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.color.secundary};
`;
const StyledSmallImg = styled.img`
  width: 20%;
  min-height: 33%;
`;

const StyledInfoDiv = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

const StyledSystemDiv = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.text};
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StyledOtherInfoDiv = styled.div`
  background-color: ${(props) => props.theme.color.tertiary};
  width: 100%;
  min-height: 10%;
  color: ${(props) => props.theme.color.text};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
`;
const StyledOtherInfoP = styled.p`
  height: 50%;
  width: 50%;
`;

const StyledDescriptionDiv = styled.div`
  background-color: ${(props) => props.theme.color.fourth};
  width: 100%;
  height: 45%;
  color: ${(props) => props.theme.color.text};
  padding-top: 3px;
  justify-content: space-around;
  align-items: center;
  overflow-y: hidden;
  :hover {
    overflow-y: scroll;
  }
`;

const StyledH6 = styled.h6`
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
  width: 100%;
  text-align: center;
`;
const StyledTextSpam = styled.span`
  font-weight: bold;
`;

export default GameCard;
