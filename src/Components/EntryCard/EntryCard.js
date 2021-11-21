import React, { useState } from "react";
import styled from "styled-components";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";
import { useSwitchTheme } from "../../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const EntryCard = () => {
  const [text, setText] = useState([
    "Dev in House",
    " Projeto 2",
    "by",
    "Gabriel Hoffmann",
    "DEVinMMO",
  ]);

  const { dispatch } = useSwitchTheme();

  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledTextScramble
        texts={text}
        letterSpeed={50}
        nextLetterSpeed={100}
        pauseTime={1000}
      />
      {!menu ? (
        <StyledButton
          type="button"
          onClick={() => {
            setText([
              "DEVinMMO",
              "devINmmo",
              "DeViNmMo",
              "DEVINMMO",
              "devinmmo",
              "D E V I N M M O",
              "O M M N I V E D",
            ]);
            setMenu(true);
          }}
        >
          Open Menu
        </StyledButton>
      ) : (
        <></>
      )}
      {menu ? (
        <StyledButtonsDiv>
          <StyledButton type="button" onClick={() => navigate("/games")}>
            Games
          </StyledButton>
          <StyledButton type="button" onClick={() => navigate("/news")}>
            News
          </StyledButton>
          <StyledButtonDiv>
            <StyledButton
              type="button"
              onClick={() => {
                dispatch({ type: "badass" });
                localStorage.setItem("theme", "badass");
              }}
            >
              Badass Mode
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() => {
                dispatch({ type: "pikachu" });
                localStorage.setItem("theme", "pikachu");
              }}
            >
              Pikachu Mode
            </StyledButton>
          </StyledButtonDiv>
        </StyledButtonsDiv>
      ) : (
        <p></p>
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.primary};
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const StyledTextScramble = styled(TextScramble)`
  font-size: 72px;
  text-align: center;
  color: ${(props) => props.theme.color.text};
  width: 100%;
`;

const StyledButtonDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  background: ${(props) => props.theme.color.secundary};
  height: 50px;
  width: 80px;
  border-radius: 40%;
`;

const StyledButtonsDiv = styled.div`
  width: 50%;
  height:25%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  gap:1%;
  
`;

export default EntryCard;
