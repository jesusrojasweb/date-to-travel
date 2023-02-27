import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import FapTime from './components/FapTime'

import './FapTimes.css'

function FapTimes() {
  const { user, couple } = useContext(UserContext)

  return (
    <section className="FapTimes">
      <FapTime user={couple} />
      <FapTime user={user} />
    </section>
  )
}

export default FapTimes
