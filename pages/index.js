import React, { useState, useEffect, useContext } from "react"

import FirebaseContext from "/firebase/context"

import Product from "/components/Product"
import Spinner from "/components/ui/Spinner"

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    let mounted = true
    const getProducts = () => {
      firebase.db
        .collection("products")
        .orderBy("createdOn", "desc")
        .onSnapshot(handleSnapshot)
    }
    if (mounted) {
      setLoading(true)
      getProducts()
    }

    return () => (mounted = false)
    // eslint-disable-next-line
  }, [])

  function handleSnapshot(snapshot) {
    const productsDb = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    setProducts(productsDb)
    setLoading(false)
  }
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
