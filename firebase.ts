// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKOBn3JE7GBxyebysY7kRjr0QZS4AJv1U",
  authDomain: "netflix-clone-1fbea.firebaseapp.com",
  projectId: "netflix-clone-1fbea",
  storageBucket: "netflix-clone-1fbea.appspot.com",
  messagingSenderId: "730506150692",
  appId: "1:730506150692:web:66aca1b3242a05a2fbe9b1"
};

// Kita lakukan pengecekan dulu apakah firebase sudah terinisialisasi atau belum
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db };