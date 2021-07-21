import React, { useState } from "react"

import { SearchInput, SubmitButton } from "/styles/theme/ui/SearchBar-theme"

export default function SearchBar() {
  const [userSearch, setUserSearch] = useState("")
  return (
    <form className="search-bar-form">
      <SearchInput type="text" placeholder="Buscar Productos" />
      <SubmitButton type="submit"></SubmitButton>
    </form>
  )
}
