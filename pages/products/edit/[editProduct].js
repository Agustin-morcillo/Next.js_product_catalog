import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"

import FirebaseContext from "/firebase/context"
import validateCreateProduct from "/validations/validateCreateProduct"
import useFormValidation from "/hooks/useFormValidation"

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
  }, [editProduct, product])

  const INITIAL_STATE = {
    name: "",
    company: "",
    url: "",
    description: "",
  }

  const { values, errors, handleSubmit, handleChange } = useFormValidation(
    INITAL_STATE,
    validateCreateProduct,
    editingProduct
  )
  const { name, company, url, description } = values

  async function editingProduct() {
    try {
      await firebase.db
        .collection("products")
        .doc(editProduct)
        .update({ name, company, url, description })
    } catch (error) {
      console.error("Hubo un error", error)
    }

    console.log("editando...")

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
              value={values.name || product.name}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </InputContainer>

          <InputContainer>
            <label htmlFor="new-product-company">Empresa</label>
            <input
              type="text"
              id="new-product-company"
              placeholder="Nombre de la Empresa"
              name="company"
              value={values.company || product.company}
              onChange={handleChange}
            />
            {errors.company && <Error>{errors.company}</Error>}
          </InputContainer>

          <InputContainer>
            <label htmlFor="new-product-url">URL</label>
            <input
              type="url"
              id="new-product-url"
              placeholder="URL del Producto"
              name="url"
              value={values.url || product.url}
              onChange={handleChange}
            />
            {errors.url && <Error>{errors.url}</Error>}
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
              value={values.description || product.description}
              onChange={handleChange}
            />
            {errors.description && <Error>{errors.description}</Error>}
          </InputContainer>
        </fieldset>

        <SubmitButton>Guardar Cambios</SubmitButton>
      </Form>
    </div>
  )
}
