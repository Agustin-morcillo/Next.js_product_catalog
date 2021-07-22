import React, { useState } from "react"
import Router from "next/router"

import firebase from "/firebase/firebase"
import validateLogin from "/validations/validateLogin"
import useFormValidation from "/hooks/useFormValidation"

import { SectionTitle } from "/styles/globalStyle"
import {
  Form,
  InputContainer,
  Error,
  SubmitButton,
} from "/styles/theme/Form-theme"

export default function Login() {
  const [firebaseError, setFirebaseError] = useState(null)

  const INITIAL_STATE = {
    email: "",
    password: "",
  }

  const loginUser = async () => {
    try {
      await firebase.login(email, password)
      return Router.push("/")
    } catch (error) {
      console.error("Hubo un error al logear el usuario", error)
      return setFirebaseError("Email o contraseña incorrectos")
    }
  }

  const { values, errors, handleSubmit, handleChange } = useFormValidation(
    INITIAL_STATE,
    validateLogin,
    loginUser
  )
  const { email, password } = values

  return (
    <div>
      <SectionTitle>Iniciar Sesión</SectionTitle>
      <Form noValidate onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            placeholder="Tu Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <Error>{errors.email}</Error>}
        </InputContainer>

        <InputContainer>
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            placeholder="Tu Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <Error>{errors.password}</Error>}
          {firebaseError && !errors.password && <Error>{firebaseError}</Error>}
        </InputContainer>

        <SubmitButton>Iniciar Sesión</SubmitButton>
      </Form>
    </div>
  )
}
