import React from 'react'
import { signOut } from '../../services/user.services'

function Menu() {
  return (
    <div>
      <button onClick={signOut}>Cerrar sesion</button>
    </div>
  )
}

export default Menu
