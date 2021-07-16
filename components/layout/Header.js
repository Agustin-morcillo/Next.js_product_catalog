import React, { useContext } from "react"
import Link from "next/link"

import FirebaseContext from "/firebase/context"

import { HeaderContainer, Logo } from "/styles/theme/layout/Header-theme"
import { Button } from "/styles/globalStyle"
import SearchBar from "../ui/SearchBar"
import NavBar from "./NavBar"

export default function Header() {
  const { user, firebase } = useContext(FirebaseContext)

  return (
    <header className="app-header">
      <HeaderContainer>
        <div className="header-left">
          <Link href="/" passHref>
            <Logo>P</Logo>
          </Link>

          <SearchBar />
          <NavBar />
        </div>

        <div className="user-actions-container">
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
        </div>
      </HeaderContainer>
    </header>
  )
}
