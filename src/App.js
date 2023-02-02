import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'

import Home from './pages/Home'
import Login from './pages/Login/'
import Register from './pages/Register/'
import { auth } from './utilities/firebase.utility'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuth ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/resetPassword"
          element={isAuth ? <Navigate to="/" /> : <ForgotPassword />}
        />
      </Routes>
    </Router>
  )
}

export default App
