import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetPassword } from '../../services/user.services'
import { Link } from 'react-router-dom'

import './ForgotPassword.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isMessageSend, setIsMessageSend] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await resetPassword(email)
      setIsMessageSend(true)
    } catch (error) {
      setError(error.message)
    }
  }

  if (isMessageSend) {
    return (
      <section className="ForgotPassword">
        <p className="ForgotPassword__message">
          El correo de modificar contraseña fue enviado a su correo
        </p>
        <Link to="/login" className="ForgotPassword__back">
          Ir al login
        </Link>
      </section>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="ForgotPassword">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="ForgotPassword__input"
      />
      <button type="submit" className="ForgotPassword__button">
        Enviar
      </button>
      {error && <p className="ForgotPassword__error">{error}</p>}
      <Link to="/login" className="ForgotPassword__back">
        Ingresar
      </Link>
    </form>
  )
}
