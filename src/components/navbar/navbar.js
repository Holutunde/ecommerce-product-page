import React from 'react'
import { Link } from 'react-router-dom'
import cart from './icon-cart.svg'
import avatar from './image-avatar.png'
import { CartContext, useContext } from '../../Util/CartContext'
import './Navbar.css'

const Navbar = () => {
  const { itemNumber } = useContext(CartContext)
  return (
    <div className="container">
      <nav>
        <div className="left-side-container">
          <div className="left-side">
            <h2 className="left-side-text">sneakers</h2>
          </div>
          <div className="middle">
            <Link className="link-text" to="/collections">
              <li>Collections</li>
            </Link>
            <Link className="link-text" to="/men">
              <li>Men</li>
            </Link>
            <Link className="link-text" to="/women">
              <li>Women</li>
            </Link>
            <Link className="link-text" to="/about">
              <li>About</li>
            </Link>
            <Link className="link-text" to="/collections">
              <li>Contact</li>
            </Link>
          </div>
        </div>
        <div className="right-side-container">
          <d3iv className="cart-wrapper">
            {itemNumber > 0 ? <p>{itemNumber}</p> : null}
            <img
              src={cart}
              alt=""
              height="20"
              width="20"
              style={{ marginRight: 30, marginTop: 10 }}
            />
          </d3iv>

          <img src={avatar} alt="" height="40" width="40" />
        </div>
      </nav>
      <div className="line"></div>
    </div>
  )
}

export default Navbar
