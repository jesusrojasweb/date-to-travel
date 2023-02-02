import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCiUF9hEzSwJJmjTo2OfeyElvAsEU5WL7M',
  authDomain: 'date-to-travel.firebaseapp.com',
  databaseURL: 'https://date-to-travel-default-rtdb.firebaseio.com',
  projectId: 'date-to-travel',
  storageBucket: 'date-to-travel.appspot.com',
  messagingSenderId: '172413182754',
  appId: '1:172413182754:web:5e357ff3bdb81a0ff0fb7b'
}

export function translateFirebaseErrors({ code }) {
  let message = ''
  switch (code) {
    case 'auth/wrong-password': {
      message = 'La contraseña es incorrecta'
      break
    }

    case 'auth/user-not-found': {
      message = 'El usuario no existe'
      break
    }

    case 'auth/too-many-requests': {
      message = 'Demasiados intentos, vuelva a intentar en 10 minutos'
      break
    }

    case 'EMAIL_NOT_FOUND': {
      message = 'El correo no existe'
      break
    }

    case 'INVALID_PASSWORD': {
      message = 'Contraseña incorrecta'
      break
    }

    default: {
      message = 'Error, contacte al administrador'
      break
    }
  }

  return message
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
