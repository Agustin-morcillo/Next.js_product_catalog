import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import useProducts from "/hooks/useProducts"

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
      const filterProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search)
      )
      return setSearchedProducts(filterProducts)
    }
  }, [q, products])

  return (
    <>
      <div>
        <div className="products-list">
          <div className="container">
            {loading && (
              <>
                <Spinner />
                <p className="loading">Cargando...</p>
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
          </div>
        </div>
      </div>
    </>
  )
}
