import styled from "styled-components";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CommentaryCard from "../CommentaryCard/CommentaryCard";
import { handlerComments } from "../../Functions";

const Formulary = (props) => {
  const { gameId } = props;
  return (
    <StyledDiv>
      <StyledFormDiv>
        <Formik
          initialValues={{
            name: "",
            email: "",
            commentary: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name Required"),
            email: Yup.string().email().required("Email Required"),
            commentary: Yup.string().required("No Empty Comment Allowed"),
          })}
          onSubmit={(values, { resetForm }) => {
            handlerComments(gameId, values);
            resetForm();
            window.location.reload();
          }}
        >
          {(formProps) => {
            const { handleSubmit } = formProps;
            return (
              <StyledForm>
                <Field name="name" placeholder="Name" />
                <Field name="email" placeholder="Email" />
                <Field
                  as="textarea"
                  name="commentary"
                  placeholder="Commentary"
                />
                <button type="submit" onClick={handleSubmit}>
                  Submit Comment
                </button>
                <ErrorMessage name="name">
                  {(msg) => <StyledErrorDiv>{msg}</StyledErrorDiv>}
                </ErrorMessage>
                <ErrorMessage name="email">
                  {(msg) => <StyledErrorDiv>{msg}</StyledErrorDiv>}
                </ErrorMessage>
                <ErrorMessage name="commentary">
                  {(msg) => <StyledErrorDiv>{msg}</StyledErrorDiv>}
                </ErrorMessage>
              </StyledForm>
            );
          }}
        </Formik>
      </StyledFormDiv>
      <StyledComentary>
        <CommentaryCard gameId={gameId} />
      </StyledComentary>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 40%;
  background: green;
  display: flex;
  flex-direction: row;
`;
const StyledFormDiv = styled.div`
  width: 30%;
  height: 100%;
  background: ${(props) => props.theme.color.primary};
`;
const StyledComentary = styled.div`
  height: 100%;
  width: 70%;
  background: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 14px;
  color: black;
`;
const StyledErrorDiv = styled.div`
  color: red;
  font-weight: "bold";
  font-size: 18px;
`;

export default Formulary;
