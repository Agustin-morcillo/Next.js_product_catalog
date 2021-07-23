import React from "react"
import Link from "next/link"
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
        <div className="img-container">
          <Image src={image} alt="" />
        </div>

        <div className="info-container">
          <Link href="/products/[id]" as={`/products/${id}`} passHref>
            <Name>{name}</Name>
          </Link>
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

        <Votes>
          <div className="vote-box">
            <div>&#9650;</div>
            <p>{votes}</p>
          </div>
        </Votes>
      </ProductInformation>
    </Container>
  )
}
