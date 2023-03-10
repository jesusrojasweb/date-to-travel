import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, firestore, storage } from '../utilities/firebase.utility'

export async function createUserWithEmailAndPasswordService(
  email,
  password,
  name
) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    const userRef = doc(firestore, 'users', user.uid)
    const userData = { name, email, fapTimesLeft: 25 }
    await setDoc(userRef, userData)
    return user
  } catch (error) {
    throw new Error(error)
  }
}

export async function signInWithEmailAndPasswordService(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    throw new Error(error.code)
  }
}

export async function signOut() {
  try {
    await auth.signOut()
  } catch (error) {
    throw new Error(error)
  }
}

export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    throw new Error(error)
  }
}

export async function uploadFile(file) {
  try {
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    return fileRef.getDownloadURL()
  } catch (error) {
    throw new Error(error)
  }
}

export async function getUserData(userId) {
  try {
    const userRef = doc(firestore, 'users', userId)
    const user = await getDoc(userRef)
    return user.data()
  } catch (error) {
    throw new Error(error)
  }
}

export async function updateUser(userId, updatedUserData) {
  try {
    const userRef = doc(firestore, 'users', userId)
    await updateDoc(userRef, updatedUserData)
  } catch (error) {
    throw new Error(error)
  }
}
