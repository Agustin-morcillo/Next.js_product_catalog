import React, { useContext } from "react"
import Router from "next/router"
import FileUploader from "react-firebase-file-uploader"

import FirebaseContext from "/firebase/context"
import validateProduct from "/validations/validateProduct"
import useFormValidation from "/hooks/useFormValidation"
import ImgUploader from "/config/fileUploader"

import { SectionTitle } from "/styles/globalStyle"
import {
  Form,
  InputContainer,
  Error,
  SubmitButton,
} from "/styles/theme/Form-theme"
import PageNotFound from "/components/layout/PageNotFound"

export default function CreateProduct() {
  const { user, firebase } = useContext(FirebaseContext)

  /* Img controller */
  const {
    imgUrl,
    handleUploadStart,
    handleProgress,
    handleUploadError,
    handleUploadSuccess,
  } = ImgUploader()

  const INITIAL_STATE = {
    name: "",
    company: "",
    url: "",
    description: "",
  }

  const { values, errors, handleSubmit, handleChange } = useFormValidation(
    INITIAL_STATE,
    validateProduct,
    createProduct
  )
  const { name, company, url, description } = values

  async function createProduct() {
    const product = {
      name,
      company,
      image: imgUrl,
      url,
      description,
      votes: 0,
      votedBy: [],
      comments: [],
      createdBy: {
        id: user.uid,
        name: user.displayName,
      },
      createdOn: Date.now(),
    }

    try {
      await firebase.db.collection("products").add(product)
    } catch (error) {
      return console.error("Hubo un error al crear el producto", error)
    }

    return Router.push("/")
  }

  if (!user) {
    return <PageNotFound message="No puedes acceder a esta página" />
  }

  return (
    <div>
      <SectionTitle>Nuevo Producto</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Información General</legend>
          <InputContainer>
            <label htmlFor="new-product-name">Nombre</label>
            <input
              type="text"
              id="new-product-name"
              placeholder="Nombre del Producto"
              name="name"
              value={name}
              onChange={handleChange}
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
              value={company}
              onChange={handleChange}
            />
            {errors.company && <Error>{errors.company}</Error>}
          </InputContainer>

          <InputContainer>
            <label htmlFor="new-product-image">Imagen</label>
            <FileUploader
              accept="image/*"
              required
              id="new-product-image"
              name="image"
              randomizeFilename
              storageRef={firebase.storage.ref("products")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
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
              value={description}
              onChange={handleChange}
            />
            {errors.description && <Error>{errors.description}</Error>}
          </InputContainer>
        </fieldset>

        <SubmitButton>Crear Producto</SubmitButton>
      </Form>
    </div>
  )
}
