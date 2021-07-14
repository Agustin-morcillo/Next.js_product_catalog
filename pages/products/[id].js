import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"

import FirebaseContext from "/firebase/context"

import PageNotFound from "/components/layout/PageNotFound"
import Spinner from "/components/ui/Spinner"

export default function Product() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const router = useRouter()
  const {
    query: { id },
  } = router

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    if (id) {
      setLoading(true)
      const getProduct = async () => {
        try {
          const productQuery = await firebase.db.collection("products").doc(id)
          const productData = await productQuery.get()
          if (!productData.exists) {
            setError(true)
            return setLoading(false)
          }
          setProduct(productData.data())
          return setLoading(false)
        } catch (error) {
          console.error("Hubo un error", error)
        }
      }
      getProduct()
    }
    // eslint-disable-next-line
  }, [id])

  if (loading) {
    return (
      <>
        <Spinner />
        <p className="loading">Cargando...</p>
      </>
    )
  }

  if (error) {
    return <PageNotFound />
  }

  return (
    <div>
      <p>Desde {id}</p>
    </div>
  )
}
