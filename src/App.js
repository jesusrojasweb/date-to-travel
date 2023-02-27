import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home'
import Login from './pages/Login/'
import Register from './pages/Register/'
import Chat from './pages/Chat/'
import Profile from './pages/Profile/Profile'
import UserWrapper from './context/UserWrapper'
import { useAuth } from './hooks/useAuth'
import Singleton from './pages/Singleton'

function App() {
  const { isAuth } = useAuth()

  return (
    <UserWrapper>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isAuth ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/singleton" element={<Singleton />} />
          <Route
            path="/chat"
            element={isAuth ? <Chat /> : <Navigate to="/login" />}
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
    </UserWrapper>
  )
}

export default App
