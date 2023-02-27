import React from 'react'

import './FapTime.css'

function FapTime({ user }) {
  return (
    <article className="FapTime">
      <div className="FapTime__column">
        <h3 className="FapTime__title">Veces restantes de</h3>
        <h4 className="FapTime__name">{user.name}</h4>
      </div>
      <div className="FapTime__column">
        <span className="FapTime__fap">{user.fapTimesLeft}</span>
      </div>
    </article>
  )
}

export default FapTime
