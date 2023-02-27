import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { getUserData } from '../services/user.services'
import { auth } from '../utilities/firebase.utility'
import UserContext from './UserContext'

export default function UserWrapper(props) {
  const [user, setUser] = useState({})
  const [couple, setCouple] = useState({})
  const [fapTimesLeft, setFapTimesLeft] = useState(null)
  const [coupleFapTimesLeft, setCoupleFapTimesLeft] = useState(null)
  const { isAuth } = useAuth()

  useEffect(() => {
    if (isAuth) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        const userData = await getUserData(user.uid)
        setUser(userData)
        setFapTimesLeft(userData.fapTimesLeft)
        if (userData.coupleId) {
          const coupleData = await getUserData(userData.coupleId)
          setCouple(coupleData)
          setCoupleFapTimesLeft(coupleData.fapTimesLeft)
        }
      })
      return () => unsubscribe()
    }
  }, [isAuth])

  const contextValue = {
    user,
    setUser,
    couple,
    setCouple,
    fapTimesLeft,
    setFapTimesLeft,
    coupleFapTimesLeft,
    setCoupleFapTimesLeft
  }

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  )
}
