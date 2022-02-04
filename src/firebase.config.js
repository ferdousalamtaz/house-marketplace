import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4cQbsuxwFhdz5GiDVleQEifU2b67W5xM',
  authDomain: 'house-marketplace-app-1c1b4.firebaseapp.com',
  projectId: 'house-marketplace-app-1c1b4',
  storageBucket: 'house-marketplace-app-1c1b4.appspot.com',
  messagingSenderId: '100361832773',
  appId: '1:100361832773:web:1be3d1d3f19f7c9c54562c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
