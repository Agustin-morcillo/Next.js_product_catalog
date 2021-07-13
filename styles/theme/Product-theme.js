import styled from "styled-components"

export const Container = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
`
export const ProductInformation = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
`

export const Image = styled.img`
  width: 200px;
`

export const Name = styled.a`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`

export const Description = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: #888;
`

export const Comments = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    padding: 0.3rem 1rem;
    margin-right: 2rem;
  }

  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;

    &:last-of-type {
      margin: 0;
    }
  }
`

export const CommentIcon = styled.img`
  width: 2rem;
  margin-right: 2rem;
`

export const Votes = styled.div`
  flex: 0 0 auto;
  text-align: center;
  border: 1px solid #e1e1e1;
  padding: 1rem 3rem;

  div {
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
`
