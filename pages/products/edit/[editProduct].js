import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"

import FirebaseContext from "/firebase/context"
import validateEditProduct from "/validations/validateEditProduct"

import { SectionTitle, LoadingText } from "/styles/globalStyle"
import {
  Form,
  InputContainer,
  Error,
  SubmitButton,
} from "/styles/theme/Form-theme"
import Spinner from "/components/ui/Spinner"
import PageNotFound from "/components/layout/PageNotFound"

export default function EditProduct() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [checkDB, setCheckDB] = useState(true)
  const [error, setError] = useState(false)
  const [valuesError, setValuesError] = useState({})

  const { name, company, url, description } = product

  const { user, firebase } = useContext(FirebaseContext)

  /* Getting product ID */
  const router = useRouter()
  const {
    query: { editProduct },
  } = router

  useEffect(() => {
    if (editProduct && checkDB) {
      const getProduct = async () => {
        try {
          const productQuery = await firebase.db
            .collection("products")
            .doc(editProduct)
          const productData = await productQuery.get()
          if (!productData.exists) {
            setError(true)
            setLoading(false)
            return setCheckDB(false)
          }
          setProduct(productData.data())
          setLoading(false)
          return setCheckDB(false)
        } catch (error) {
          console.error("Hubo un error", error)
        }
      }
      getProduct()
    }
    // eslint-disable-next-line
  }, [editProduct])

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const validation = validateEditProduct(product)

    if (Object.keys(validation).length > 0) {
      return setValuesError(validation)
    }

    try {
      await firebase.db
        .collection("products")
        .doc(editProduct)
        .update({ name, company, url, description })
    } catch (error) {
      console.error("Hubo un error", error)
    }

    return router.push("/")
  }

  if (loading) {
    return (
      <>
        <Spinner />
        <LoadingText>Cargando...</LoadingText>
      </>
    )
  }

  if (!user || error) {
    return <PageNotFound message="No puedes acceder a esta página" />
  }

  return (
    <div>
      <SectionTitle>Editar Producto</SectionTitle>
      <Form noValidate onSubmit={handleSubmit}>
        <fieldset>
          <legend>Información General</legend>
          <InputContainer>
            <label htmlFor="new-product-name">Nombre</label>
            <input
              type="text"
              id="new-product-name"
              placeholder="Nombre del Producto"
              name="name"
              onChange={handleChange}
              value={name}
            />
            {valuesError.name && <Error>{valuesError.name}</Error>}
          </InputContainer>

          <InputContainer>
            <label htmlFor="new-product-company">Empresa</label>
            <input
              type="text"
              id="new-product-company"
              placeholder="Nombre de la Empresa"
              name="company"
              value={company}
              onChange={handleChange}
            />
            {valuesError.company && <Error>{valuesError.company}</Error>}
          </InputContainer>

          <InputContainer>
            <label htmlFor="new-product-url">URL</label>
            <input
              type="url"
              id="new-product-url"
              placeholder="URL del Producto"
              name="url"
              value={url}
              onChange={handleChange}
            />
            {valuesError.url && <Error>{valuesError.url}</Error>}
          </InputContainer>
        </fieldset>

        <fieldset>
          <legend>Sobre tu Producto</legend>
          <InputContainer>
            <label htmlFor="new-product-description">Descripción</label>
            <textarea
              id="new-product-description"
              placeholder="Descripción del Producto"
              name="description"
              value={description}
              onChange={handleChange}
            />
            {valuesError.description && (
              <Error>{valuesError.description}</Error>
            )}
          </InputContainer>
        </fieldset>

        <SubmitButton>Guardar Cambios</SubmitButton>
      </Form>
    </div>
  )
}
