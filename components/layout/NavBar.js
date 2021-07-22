import React, { useContext } from "react"
import Link from "next/link"

import FirebaseContext from "/firebase/context"

import { Nav, NavContainer } from "/styles/theme/layout/NavBar-theme"

export default function NavBar() {
  const { user } = useContext(FirebaseContext)
  return (
    <NavContainer>
      <Nav>
        <Link href="/">
          <a>Inicio</a>
        </Link>

        <Link href="/popular">
          <a>Polulares</a>
        </Link>

        {user && (
          <Link href="/create-product">
            <a>Nuevo Producto</a>
          </Link>
        )}
      </Nav>
    </NavContainer>
  )
}
