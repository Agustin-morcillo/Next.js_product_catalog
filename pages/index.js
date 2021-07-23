import React from "react"

import useProducts from "/hooks/useProducts"

import { ProductList, Container, LoadingText } from "/styles/globalStyle"
import Product from "/components/layout/Product"
import Spinner from "/components/ui/Spinner"

export default function Home() {
  const { products, loading } = useProducts("createdOn")

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

            {products.length < 1 && !loading ? (
              <p className="no-product">No hay productos aún.</p>
            ) : (
              <ul className="bg-white">
                {products.map((product) => (
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
