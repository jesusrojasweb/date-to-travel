import { doc, setDoc, getDoc } from 'firebase/firestore'
import { firestore } from '../utilities/firebase.utility'

export async function addDate(date) {
  try {
    const datesRef = doc(firestore, 'dates/jesus')
    const userData = { date }
    await setDoc(datesRef, userData)
    return date
  } catch (error) {
    throw new Error(error)
  }
}

export async function getDate() {
  try {
    const datesRef = doc(firestore, 'dates/jesus')

    const date = await getDoc(datesRef)

    return date.data()
  } catch (error) {
    throw new Error(error)
  }
}
