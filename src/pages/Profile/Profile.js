import React from 'react'
import { Link } from 'react-router-dom'
import TimeToBack from './components/TimeToBack/TimeToBack'
import BasicLayout from '../../components/BasicLayout/BasicLayout'

function Profile() {
  return (
    <BasicLayout>
      <Link to="/">Home</Link>
      <h1>Profile</h1>
      <TimeToBack />
    </BasicLayout>
  )
}

export default Profile
