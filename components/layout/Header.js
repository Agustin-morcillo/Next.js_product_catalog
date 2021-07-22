import React, { useContext } from "react"
import Link from "next/link"

import FirebaseContext from "/firebase/context"

import {
  HeaderContainer,
  Logo,
  AppHeader,
  HeaderLeft,
  UserActionHeader,
} from "/styles/theme/layout/Header-theme"
import { Button } from "/styles/globalStyle"
import SearchBar from "../ui/SearchBar"
import NavBar from "./NavBar"

export default function Header() {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <AppHeader>
      <HeaderContainer>
        <HeaderLeft>
          <Link href="/" passHref>
            <Logo>P</Logo>
          </Link>

          <SearchBar />
          <NavBar />
        </HeaderLeft>

        <UserActionHeader>
          {user ? (
            <>
              <p className="header-user-name">Hola: {user.displayName}</p>
              <Link href="/" passHref>
                <Button bgColor onClick={() => firebase.logout()}>
                  Cerrar Sesión
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" passHref>
                <Button bgColor>Login</Button>
              </Link>

              <Link href="/register" passHref>
                <Button>Crear Cuenta</Button>
              </Link>
            </>
          )}
        </UserActionHeader>
      </HeaderContainer>
    </AppHeader>
  )
}
