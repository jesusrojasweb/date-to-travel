import { createContext } from 'react'

const UserContext = createContext({
  user: {},
  couple: {},
  setUser: () => null,
  setCouple: {},
  fapTimesLeft: null,
  coupleFapTimesLeft: null,
  setFapTimesLeft: () => null,
  setCoupleFapTimesLeft: () => null
})

export default UserContext
