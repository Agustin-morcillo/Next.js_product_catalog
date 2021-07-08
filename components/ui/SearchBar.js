import React from "react"

import { SearchInput, SubmitButton } from "/styles/theme/layout/SearchBar-theme"

export default function SearchBar() {
  return (
    <form className="search-bar-form">
      <SearchInput type="text" placeholder="Buscar Productos" />
      <SubmitButton type="submit"></SubmitButton>
    </form>
  )
}
