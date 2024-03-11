import  {initializeApp}  from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBEF9cLCUWP4hTegzbSG1R_kvRTRmwGlEg',
    authDomain: "careful-drummer-410700.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    // databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "careful-drummer-410700",
    storageBucket: "careful-drummer-410700.appspot.com",
    messagingSenderId: "692875398729",
    appId: "692875398729",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    // measurementId: "G-MEASUREMENT_ID",
}

initializeApp(firebaseConfig)

let instance = null

export default function getFirebase() {
    if (typeof window !== 'undefined') {
      if (instance) return instance;
      instance = initializeApp(firebaseConfig);
      return instance;
    }
  
    return null;
  }