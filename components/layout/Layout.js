import React from "react"

import GlobalStyle from "../../styles/globalStyle"
import Header from "./Header"

export default function Layout(props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
    </>
  )
}
