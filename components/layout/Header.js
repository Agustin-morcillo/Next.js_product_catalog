import React from "react"
import Link from "next/link"

import {
  HeaderContainer,
  Logo,
  Button,
} from "/styles/theme/layout/Header-theme"
import SearchBar from "../ui/SearchBar"
import NavBar from "./NavBar"

export default function Header() {
  const user = false
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
              <p className="header-user-name">Hola: Agustin</p>
              <Link href="/" passHref>
                <Button bgColor>Cerrar Sesión</Button>
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
