import { useEffect, useState } from "react"

import firebase from "/firebase/firebase"

export default function useAuth() {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => unsuscribe
  }, [])

  return authUser
}
