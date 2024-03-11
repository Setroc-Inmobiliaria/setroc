import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBEF9cLCUWP4hTegzbSG1R_kvRTRmwGlEg",
  authDomain: "careful-drummer-410700.firebaseapp.com",
  projectId: "careful-drummer-410700",
  storageBucket: "careful-drummer-410700.appspot.com",
  messagingSenderId: "692875398729",
  appId: "1:692875398729:web:26638525a5975e302cf998",
  measurementId: "G-C13Y7NBL7J"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const db = getFirestore(app)

export  {db, auth};