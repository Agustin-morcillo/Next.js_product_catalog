import React, { useState } from "react"
import Router from "next/router"

import firebase from "/firebase/firebase"
import validateRegister from "/validations/validateRegister"
import useFormValidation from "/hooks/useFormValidation"

import {
  Form,
  InputContainer,
  Error,
  SubmitButton,
} from "/styles/theme/Form-theme"

export default function Register() {
  const [firebaseError, setFirebaseError] = useState(null)

  const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
  }

  const registerUser = async () => {
    try {
      await firebase.register(username, email, password)
      return Router.push("/")
    } catch (error) {
      console.error("Hubo un error al crear el usuario", error)
      return setFirebaseError("El email ingresado ya se encuentra en uso")
    }
  }

  const { values, errors, handleSubmit, handleChange } = useFormValidation(
    INITIAL_STATE,
    validateRegister,
    registerUser
  )
  const { username, email, password } = values

  return (
    <div>
      <h1 className="section-title">Crear Cuenta</h1>
      <Form noValidate onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="register-username">Nombre</label>
          <input
            type="text"
            id="register-username"
            placeholder="Tu Nombre"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <Error>{errors.username}</Error>}
        </InputContainer>

        <InputContainer>
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            id="register-email"
            placeholder="Tu Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <Error>{errors.email}</Error>}
          {firebaseError && !errors.email && <Error>{firebaseError}</Error>}
        </InputContainer>

        <InputContainer>
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            id="register-password"
            placeholder="Tu Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <Error>{errors.password}</Error>}
        </InputContainer>

        <SubmitButton>Crear Cuenta</SubmitButton>
      </Form>
    </div>
  )
}
