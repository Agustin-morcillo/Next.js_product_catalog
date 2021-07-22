import styled from "styled-components"

export const Title = styled.h1`
  text-align: center;
  padding: 0;
  margin: 20px 0 20px 0;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
`

export const ProductImage = styled.img`
  width: 100%;
  margin-top: 80px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
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

export const Button = styled.a`
  display: block;
  width: auto;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin-bottom: 5px;
  text-align: center;
  background-color: ${(props) => props.bgColor && props.bgColor};
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => props.ml && props.ml};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hover && props.hover};
  }

  @media (max-width: 768px) {
    margin: 0px 0 15px 0;
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 70%;
  }
`
