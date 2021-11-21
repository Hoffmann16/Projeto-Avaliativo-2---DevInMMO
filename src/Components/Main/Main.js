import React from "react";
import styled from "styled-components";

const Main = ({children}) => {
  

  return (
    <>
      <StyledMain>
          {children}
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  background-image: url(${props=>props.theme.background_image});
  background-repeat: round;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 95vh;
  align-items: center;
`;

export default Main;

//https://www.teahub.io/photos/full/26-267204_wallpaper-kawaii-game-anime-cartoon-crossover-cosplay-stitch.jpg