import "/styles/globals.css"
import FirebaseContext from "/firebase/context"
import firebase from "/firebase/firebase"
import Layout from "../components/layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  )
}

export default MyApp
