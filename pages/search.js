import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import useProducts from "/hooks/useProducts"

import { ProductList, Container, LoadingText } from "/styles/globalStyle"
import Product from "/components/layout/Product"
import Spinner from "/components/ui/Spinner"

export default function Search() {
  const [searchedProducts, setSearchedProducts] = useState([])

  const router = useRouter()
  const {
    query: { q },
  } = router

  const { products, loading } = useProducts("createdBy")

  useEffect(() => {
    if (q) {
      const search = q.toLowerCase()
      const filterProducts = products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(search) ||
          product.description
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(search)
      )
      return setSearchedProducts(filterProducts)
    }
  }, [q, products])

  return (
    <>
      <div>
        <ProductList>
          <Container>
            {loading && (
              <>
                <Spinner />
                <LoadingText>Cargando...</LoadingText>
              </>
            )}

            {searchedProducts.length < 1 && !loading ? (
              <p className="no-product">No hay productos aún.</p>
            ) : (
              <ul className="bg-white">
                {searchedProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </ul>
            )}
          </Container>
        </ProductList>
      </div>
    </>
  )
}
