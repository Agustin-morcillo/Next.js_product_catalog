import styled from "styled-components"

export const Title = styled.h1`
  text-align: center;
  margin-top: 5rem;
`

export const ProductContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`

export const ProductImage = styled.img`
  max-width: 100%;
`

export const ProductOwner = styled.p`
  padding: 0.5rem 2rem;
  background-color: #da552f;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`

export const DeleteButton = styled.a`
  display: block;
  width: 40%;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin-bottom: 5px;
  text-align: center;
  background-color: #ea0000;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #f34336;
  }
`
