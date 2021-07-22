import styled from "styled-components"

export const AppHeader = styled.header`
  border-bottom: 2px solid var(--gris3);

  @media (max-width: 700px) {
    height: 110px;
    justify-content: center;
  }
`

export const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 50px;
  }

  @media (max-width: 700px) {
    justify-content: center;
  }
`

export const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Reboto Slab", serif;
  margin-right: 2rem;
`

export const UserActionHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    position: absolute;
    top: 0;
  }

  @media (max-width: 700px) {
    width: 95%;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`
