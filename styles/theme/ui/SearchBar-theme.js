import styled from "styled-components"

export const SearchForm = styled.form`
  position: relative;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    min-width: auto;
  }
`

export const SubmitButton = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/search-icon.png");
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`
