import React from "react"

import useProducts from "/hooks/useProducts"

import Product from "/components/layout/Product"
import Spinner from "/components/ui/Spinner"

export default function Home() {
  const { products, loading } = useProducts("createdBy")

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

            {products.length < 1 && !loading ? (
              <p className="no-product">No hay productos aún.</p>
            ) : (
              <ul className="bg-white">
                {products.map((product) => (
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
