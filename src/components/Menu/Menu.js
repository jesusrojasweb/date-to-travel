import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IoChatboxOutline,
  IoPersonCircleOutline,
  IoAddSharp
} from 'react-icons/io5'
// import { signOut } from '../../services/user.services'
import './Menu.css'
import FapModal from './components/FapModal/FapModal'

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <>
      <FapModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <nav className="Menu">
        <ul className="Menu__container">
          <li className="Menu__item">
            <Link to="/chat" className="Menu__link">
              <IoChatboxOutline />
            </Link>
          </li>
          <li className="Menu__item">
            <button className="Menu__button" onClick={handleClick}>
              <IoAddSharp />
            </button>
          </li>
          <li className="Menu__item">
            <Link to="/profile" className="Menu__link">
              <IoPersonCircleOutline />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
