import styled from "styled-components"

export const Form = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;

  fieldset {
    margin: 2rem 0;
    border: 1px solid #e1e1e1;
    font-size: 2rem;
    padding: 2rem;
  }
`

export const InputContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }

  input,
  textarea {
    flex: 1;
    padding: 1rem;
  }

  textarea {
    resize: none;
    height: 100px;
  }
`

export const SubmitButton = styled.button`
  background-color: var(--naranja);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
  }
`
export const Error = styled.p`
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  background-color: #f2dede;
  color: #a94442;
  width: 100%;
  margin: 0.8rem 0 0 0;
  padding: 0.5rem;
`
