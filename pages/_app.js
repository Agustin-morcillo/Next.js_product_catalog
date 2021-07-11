import firebase from "/firebase/firebase"
import useAuth from "/hooks/useAuth"
import FirebaseContext from "/firebase/context"

import "/styles/globals.css"
import Layout from "/components/layout/Layout"

function MyApp({ Component, pageProps }) {
  const user = useAuth()

  return (
    <FirebaseContext.Provider value={{ firebase, user }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  )
}

export default MyApp
