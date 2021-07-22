import styled from "styled-components"

export const NavContainer = styled.div`
  @media (max-width: 700px) {
    position: absolute;
    top: 120px;
    margin: 0;
    padding-left: 0;
    text-align: center;
  }

  @media (max-width: 700px) {
    right: 25px;
    width: 100%;
  }
`

export const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;

    &::last-of-type {
      margin-right: 0;
    }
  }
`
