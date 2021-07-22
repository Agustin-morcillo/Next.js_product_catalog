import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
    --gris: #3d3d3d;
    --gris2: #6F6F6F;
    --gris3: #e1e1e1;
    --naranja: #DA552F;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem; 
        line-height: 1.5;
        font-family: 'PT Sans', sans-serif;
    }

    h1, h2, h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5;
    }

    h1, h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
    }

    h3 {
        font-family: 'PT Sans', sans-serif;
    }

    ul {
        list-style: none;
        margin: 0;
        padding:0;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }`

export default GlobalStyle

export const Button = styled.a`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin-right: 1rem;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? "#DA552F" : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000")};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

export const BoldText = styled.span`
  font-weight: bold;
`

export const ProductList = styled.div`
  background-color: #f3f3f3;
  width: 100%;
`

export const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  padding: 5rem 0;
  margin: 0 auto;
`

export const SectionTitle = styled.h1`
  text-align: center;
  margin-top: 5rem;
`

export const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
`
