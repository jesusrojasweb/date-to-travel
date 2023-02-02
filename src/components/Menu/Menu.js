import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../../services/user.services'

function Menu() {
  return (
    <div>
      <Link to="/profile">Profile</Link>
      <button onClick={signOut}>Cerrar sesion</button>
    </div>
  )
}

export default Menu
