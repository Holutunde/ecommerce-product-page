import React, { useState } from 'react'
import './Home.css'
import Product1 from './image-product-1.jpg'
import Product2 from './image-product-2.jpg'
import Product3 from './image-product-3.jpg'
import Product4 from './image-product-4.jpg'
const Home = () => {
  const { itemNumber, setItemNumber } = useState(0)
  const [cartNo, setCartNo] = useState(0)
  return (
    <div className="hm-container">
      <div className="hm-left">
        <img src={Product1} className="top-img" alt="" />
        <div className="sn-row">
          <img src={Product1} alt="" className="row-im" />
          <img src={Product2} alt="" className="row-im" />
          <img src={Product3} alt="" className="row-im" />
          <img src={Product4} alt="" className="row-im" />
        </div>
      </div>
      <div className="hm-right">
        <h3 className="txt1">SNEAKER COMPANY</h3>
        <h3 className="txt2">Fall Limited Edition Sneakers</h3>
        <p className="txt3">
          These low-profile snaeakers are your casual wear companion. Featuring
          a durable rubber outisde sole, they'll withstand anything the weather
          can offer{' '}
        </p>
        <div className="hm-right-2">
          <h3 className="amount">$125.00</h3>
          <div className="dis-cont">
            <h4 className="dis">50%</h4>
          </div>
        </div>
        <div className="hm-right-3">
          <div className="btn-cont">
            <button
              onClick={() =>
                setCartNo(() => {
                  if (cartNo <= 0) {
                    return 0
                  } else {
                    return cartNo - 1
                  }
                })
              }
            >
              -
            </button>
            <button>{cartNo}</button>
            <button onClick={() => setCartNo(cartNo + 1)}>+</button>
          </div>
          <button
            className="add-cart"
            onClick={() => setItemNumber(itemNumber + cartNo)}
          >
            {' '}
            Add to cart{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
