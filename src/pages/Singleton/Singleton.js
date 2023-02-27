import React from 'react'
import MyComponent from './components/MyComponent'

function Singleton() {
  return (
    <div>
      <MyComponent />
      <MyComponent />
    </div>
  )
}

export default Singleton
