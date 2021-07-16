import { useState, useEffect, useContext } from "react"

import FirebaseContext from "/firebase/context"

export default function useProducts(order) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const getProducts = () => {
      firebase.db
        .collection("products")
        .orderBy(order, "desc")
        .onSnapshot(handleSnapshot)
    }
    setLoading(true)
    getProducts()

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

  return {
    products,
    loading,
  }
}
