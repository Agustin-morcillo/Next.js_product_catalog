import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { es } from "date-fns/locale"

import FirebaseContext from "/firebase/context"

import { BoldText, LoadingText } from "/styles/globalStyle"
import { InputContainer, SubmitButton } from "/styles/theme/Form-theme"
import {
  SectionContainer,
  ProductContainer,
  ImgContainer,
  MainInfoContainer,
  Title,
  ProductImage,
  ProductOwner,
  Button,
  CommentSection,
  CommentContainer,
} from "/styles/theme/layout/[id]-theme"
import PageNotFound from "/components/layout/PageNotFound"
import Spinner from "/components/ui/Spinner"

export default function Product() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [checkDB, setcheckDB] = useState(true)
  const [userComment, setUserComment] = useState({
    comment: "",
  })
  const [error, setError] = useState(false)

  const { firebase, user } = useContext(FirebaseContext)

  /* Getting product ID */
  const router = useRouter()
  const {
    query: { id },
  } = router

  useEffect(() => {
    if (id && checkDB) {
      const getProduct = async () => {
        try {
          const productQuery = await firebase.db.collection("products").doc(id)
          const productData = await productQuery.get()
          if (!productData.exists) {
            setError(true)
            setLoading(false)
            return setcheckDB(false)
          }
          setProduct(productData.data())
          setLoading(false)
          return setcheckDB(false)
        } catch (error) {
          console.error("Hubo un error", error)
        }
      }
      getProduct()
    }
    // eslint-disable-next-line
  }, [id])

  /* Product information */
  const {
    name,
    image,
    description,
    company,
    comments,
    votes,
    votedBy,
    createdOn,
    url,
    createdBy,
  } = product

  if (loading) {
    return (
      <>
        <Spinner />
        <LoadingText>Cargando...</LoadingText>
      </>
    )
  }

  if (error) {
    return (
      <PageNotFound message="Oops, el producto buscado no existe o fue eliminado" />
    )
  }

  /* Is product owner? */
  const productOwner = (id) => {
    if (createdBy.id === id) {
      return true
    }
  }

  /* Voting the product */
  const voteProduct = async () => {
    if (votedBy.includes(user.uid)) {
      return
    }

    const totalVotes = votes + 1

    const hasVoted = [...votedBy, user.uid]

    try {
      await firebase.db
        .collection("products")
        .doc(id)
        .update({ votes: totalVotes, votedBy: hasVoted })
    } catch (error) {
      console.error("Hubo un error", error)
    }

    setProduct({
      ...product,
      votes: totalVotes,
      votedBy: hasVoted,
    })

    return setcheckDB(true)
  }

  /* Comments functions */
  const handleCommentChange = (e) => {
    setUserComment({
      ...userComment,
      [e.target.name]: e.target.value,
    })
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()

    if (!userComment.comment.trim()) {
      return
    }

    userComment.userId = user.uid
    userComment.username = user.displayName

    const newComments = [...comments, userComment]

    try {
      await firebase.db
        .collection("products")
        .doc(id)
        .update({ comments: newComments })
    } catch (error) {
      console.error("Hubo un error", error)
    }

    setProduct({
      ...product,
      comments: newComments,
    })

    setcheckDB(true)

    return setUserComment({
      comment: "",
    })
  }

  /* Delete Product */
  const deleteProduct = async () => {
    try {
      await firebase.db.collection("products").doc(id).delete()
      return router.push("/")
    } catch (error) {
      console.error("Hubo un error", error)
    }
  }

  return (
    <SectionContainer>
      <ProductContainer>
        <ImgContainer>
          <ProductImage src={image} alt="" />
        </ImgContainer>

        <MainInfoContainer>
          <Title>{name}</Title>
          <aside className="btn-container">
            <Button target="_blank" href={url} bgColor="#DA552F">
              Visitar Página
            </Button>

            {user && (
              <Button onClick={voteProduct} color="black" ml="10px">
                &#9650; Votar {votes}
              </Button>
            )}
          </aside>

          <p>{description}</p>

          <p>
            <BoldText> Publicado hace:</BoldText>{" "}
            {createdOn &&
              formatDistanceToNow(new Date(createdOn), { locale: es })}
          </p>

          <p>
            <BoldText> Por: </BoldText>
            {createdBy && createdBy.name} de {company}
          </p>

          {user && productOwner(user.uid) && (
            <div className="action-btn">
              <Button onClick={deleteProduct} bgColor="#ea0000" hover="#f34336">
                Eliminar
              </Button>

              <Button onClick={deleteProduct} bgColor="#DA552F" ml="10px">
                Editar
              </Button>
            </div>
          )}
        </MainInfoContainer>

        <CommentSection>
          <CommentContainer>
            {user && (
              <>
                <h2 className="add-comment">Agrega tu comentario</h2>
                <form onSubmit={handleCommentSubmit}>
                  <InputContainer>
                    <input
                      type="text"
                      name="comment"
                      onChange={handleCommentChange}
                      value={userComment.comment}
                    />
                  </InputContainer>
                  <SubmitButton>Agregar comentario</SubmitButton>
                </form>
              </>
            )}

            <h2 className="comment-title">Comentarios ({comments.length}) </h2>
            {comments.length < 1 ? (
              <p>Aún no hay comentarios.</p>
            ) : (
              <ul>
                {comments &&
                  comments.map((comment, i) => (
                    <li key={i} className="comment-list">
                      <p> &quot;{comment.comment}&quot;</p>
                      <p>
                        Escrito por <BoldText>{comment.username}</BoldText>
                      </p>
                      {productOwner(comment.userId) && (
                        <ProductOwner>Autor</ProductOwner>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </CommentContainer>
        </CommentSection>
      </ProductContainer>
    </SectionContainer>
  )
}
