import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPasswordService } from '../../services/user.services'
import { translateFirebaseErrors } from '../../utilities/firebase.utility'
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPasswordService(email, password)
      toast.success('Iniciaste sesión con éxito')
      navigate('/')
    } catch (error) {
      const message = translateFirebaseErrors({ code: error.message })
      toast.error(message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="Form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="Form__input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="Form__input"
      />
      <button type="submit" className="Form__button">
        Sign In
      </button>
      <Link to="/resetPassword" className="Form__reset">
        Se me olvido la contraseña
      </Link>
    </form>
  )
}
