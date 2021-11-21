import React, { useState, useEffect} from "react";
import styled from "styled-components";
import Votes from "../Votes/Votes";

const CommentaryCard = (props) => {
  const { gameId } = props;

  const [comm, setComm] = useState([]);

  useEffect(() => {
    const gamesComments =
      JSON.parse(localStorage.getItem("gamesComments")) || [];
    if (gamesComments.length !== 0) {
      const gameComment = gamesComments.find((x) => x.id === gameId) || [];
      if (gameComment.length !== 0) {
        setComm(gamesComments.find((x) => x.id === gameId).comments);
      }
    }
  }, [gameId]);

  if (comm.length === 0) {
    return <StyledCommentDiv>0 Commentaries</StyledCommentDiv>;
  }

  return (
    <>
      {comm.map((x, index) => (
        <StyledCommentDiv key={`${x.name}${index}`} index={index}>
          <StyledCommentNameP>{x.name}</StyledCommentNameP>
          <StyledCommentCommentaryDiv>
            <StyledCommentaryP>{x.commentary}</StyledCommentaryP>
            <StyledWhenP>{x.when}</StyledWhenP>
          </StyledCommentCommentaryDiv>
          <StyledCommentButtonDiv>
            <Votes index={index} comm={comm} gameId={gameId} />
          </StyledCommentButtonDiv>
        </StyledCommentDiv>
      ))}
    </>
  );
};

const StyledCommentDiv = styled.div`
  height: 100%;
  min-width: 50%;
  background: ${(props) => props.theme.color.secundary};
  color: ${(props) => props.theme.color.text};
  border-right: 2px ${(props) => props.theme.color.secundary} solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledCommentButtonDiv = styled.div`
  height: 20%;
  min-width: 50%;
  background: ${(props) => props.theme.color.tertiary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledCommentNameP = styled.p`
  border-radius: 3px;
  height: 10%;
  background: ${(props) => props.theme.color.tertiary};
  color: ${(props) => props.theme.color.text};
  text-align: center;
`;
const StyledCommentCommentaryDiv = styled.div`
  height: 70%;
  min-width: 50%;
  background: ${(props) => props.theme.color.fourth};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledWhenP = styled.p`
  text-align: center;
  height: 15%;
  width: 100%;
`;

const StyledCommentaryP = styled.p`
  margin: 5px;
`;

export default CommentaryCard;
