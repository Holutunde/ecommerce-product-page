import React from 'react'
import { Link } from 'react-router-dom'
import cart from './icon-cart.svg'
import avatar from './image-avatar.png'
import './navbar.css'

const navbar = () => {
  const navigate = () => {
    ;<Link to="/women">Women</Link>
  }
  return (
    <nav>
      <div className="left-side-container">
        <div className="left-side">
          <h2 onClick={navigate} className="left-side-text">
            Sneakers
          </h2>
        </div>
        <div className="middle">
          <Link className="link-text" to="/collections">
            <li>Collections</li>
          </Link>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
      <div className="right-side-container">
        <img src={cart} alt="" height="20" width="20" />
        <img src={avatar} alt="" height="20" width="20" />
      </div>
    </nav>
  )
}

export default navbar
