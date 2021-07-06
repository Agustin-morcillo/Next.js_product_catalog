import React from "react"
import Link from "next/link"

import { Nav } from "../../styles/theme/NavBar-theme"

export default function NavBar() {
  return (
    <Nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>

      <Link href="/popular">
        <a>Polulares</a>
      </Link>

      <Link href="/create-product">
        <a>Nuevo Producto</a>
      </Link>
    </Nav>
  )
}
