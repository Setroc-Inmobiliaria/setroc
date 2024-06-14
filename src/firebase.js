import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'




// const firebaseConfig = {
//   apiKey: "AIzaSyBEF9cLCUWP4hTegzbSG1R_kvRTRmwGlEg",
//   authDomain: "careful-drummer-410700.firebaseapp.com",
//   projectId: "careful-drummer-410700",
//   storageBucket: "careful-drummer-410700.appspot.com",
//   messagingSenderId: "692875398729",
//   appId: "1:692875398729:web:26638525a5975e302cf998",
//   measurementId: "G-C13Y7NBL7J"
// }

const firebaseConfig = {
  apiKey: "AIzaSyArLCeOhu_PatgA1UkGaIKpqQO602I2Zdg",
  authDomain: "setroc-inmobiliaria.firebaseapp.com",
  projectId: "setroc-inmobiliaria",
  storageBucket: "setroc-inmobiliaria.appspot.com",
  messagingSenderId: "739351249270",
  appId: "1:739351249270:web:8fc319243f6543cf7fba57",
  measurementId: "G-LH25FM0RJJ"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const fire_db = getFirestore(app)

export  {fire_db, auth};