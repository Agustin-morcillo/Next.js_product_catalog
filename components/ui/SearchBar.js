import React, { useState } from "react"
import { useRouter } from "next/router"

import {
  SearchInput,
  SubmitButton,
  SearchForm,
} from "/styles/theme/ui/SearchBar-theme"

export default function SearchBar() {
  const [userSearch, setUserSearch] = useState("")

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userSearch.trim()) {
      return
    }

    setUserSearch("")

    return router.push({
      pathname: "/search",
      query: { q: userSearch },
    })
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Buscar Productos"
        onChange={(e) => setUserSearch(e.target.value.trim())}
        value={userSearch || ""}
      />
      <SubmitButton type="submit"></SubmitButton>
    </SearchForm>
  )
}
