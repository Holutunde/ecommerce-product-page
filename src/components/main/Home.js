import React from 'react'
import Product1 from './image-product-1.jpg'
import Product2 from './image-product-2.jpg'
import Product3 from './image-product-3.jpg'
import Product4 from './image-product-4.jpg'
const Home = () => {
  return (
    <div className="hm-container">
      <div className="hm-left">
        <img src={Product1} width="250" height="250" alt="" />
      </div>
    </div>
  )
}

export default Home
