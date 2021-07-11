import app from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./config"

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig)
    }
    this.auth = app.auth()
  }

  async register(username, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )
    return await newUser.user.updateProfile({
      displayName: username,
    })
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    return await this.auth.signOut()
  }
}

const firebase = new Firebase()

export default firebase
