import React, { useReducer } from "react";
import styled from "styled-components";
import { handlerComment } from "../../Functions";

const Votes = (props) => {
  const { index, comm, gameId } = props;

  const [state, dispatch] = useReducer(reducer, { votes: comm[index].votes });

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        comm[index].votes = state.votes + 1;
        handlerComment(gameId,index,comm[index]);
        return { votes: state.votes + 1 };
      case "decrement":
        comm[index].votes = state.votes - 1;
        return { votes: state.votes - 1 };
        default :
        {console.log("default")}
    }
  }

  return (
    <>
      <StyledCommentButton
        type="button"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Like
      </StyledCommentButton>
      <span>{state.votes}</span>
      <StyledCommentButton
        type="button"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Dislike
      </StyledCommentButton>
    </>
  );
};

const StyledCommentButton = styled.button`
  border-radius: 3px;
  width: 30%;
  background: ${(props) => props.theme.color.fourth};
  color: ${(props) => props.theme.color.text};
`;

export default Votes;
