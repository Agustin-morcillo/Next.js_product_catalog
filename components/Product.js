import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { es } from "date-fns/locale"

import {
  Container,
  ProductInformation,
  Image,
  Name,
  Description,
  Comments,
  CommentIcon,
  Votes,
} from "/styles/theme/Product-theme"

export default function Product({ product }) {
  const { id, name, image, description, comments, votes, createdOn } = product

  return (
    <Container>
      <ProductInformation>
        <div>
          <Image src={image} alt="" />
        </div>
        <div>
          <Name>{name}</Name>
          <Description>{description}</Description>

          <Comments>
            <div>
              <CommentIcon src="/static/img/comment-icon.png" alt="comment" />
              <p>{comments.length} Comentarios</p>
            </div>
          </Comments>

          <p>
            Publicado hace:{" "}
            {formatDistanceToNow(new Date(createdOn), { locale: es })}
          </p>
        </div>
      </ProductInformation>

      <Votes>
        <div>&#9650;</div>
        <p>{votes}</p>
      </Votes>
    </Container>
  )
}
