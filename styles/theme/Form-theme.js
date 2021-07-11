import styled from "styled-components"

export const Form = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
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

  input {
    flex: 1;
    padding: 1rem;
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
