import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetPassword } from '../../services/user.services'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await resetPassword(email)
      alert('se ringreso correctamente')
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
      <Link to="/login">Ingresar</Link>
    </form>
  )
}
