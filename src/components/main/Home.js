import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CartContext } from '../../Util/CartContext'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import previousIcon from '../../images/icon-previous.svg'
import nextIcon from '../../images/icon-next.svg'
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'

const Home = () => {
  const sliderdata = [Product1, Product2, Product3, Product4]
  const { itemNumber, setItemNumber } = useContext(CartContext)
  const [cartNo, setCartNo] = useState(0)
  const [sliderIndex, setSliderIndex] = useState(0)

  const handleHover = (index) => {
    setSliderIndex(index)
  }

  const handleNext = () => {
    setSliderIndex(sliderIndex + 1)
  }

  const handlePrevious = () => {
    setSliderIndex(() => {
      if (sliderIndex <= 0) {
        return 0
      } else {
        return sliderIndex - 1
      }
    })
  }

  const showSlides = () => {
    if (sliderIndex > 3) {
      setSliderIndex(0)
    }
    if (sliderIndex < 0) {
      setSliderIndex(3)
    }
  }
  useEffect(() => {
    showSlides()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderIndex])

  return (
    <div className="hm-container">
      <div className="hm-left">
        <div>{sliderIndex}</div>
        <div className="slider-previous">
          <img src={previousIcon} alt="next-icon" onClick={handlePrevious} />
        </div>
        <div className="slide-img">
          <img
            className="top-img"
            src={sliderdata[sliderIndex]}
            alt="sliderimage"
          />
        </div>
        <div className="slider-next">
          <img src={nextIcon} alt="previous-icon" />
        </div>
        <div className="slider-bottomContainer">
          <div
            className={`${sliderIndex === 0 ? 'opacity' : ''}`}
            onMouseOver={() => handleHover(0)}
          >
            <img src={Product1} alt="product1" className="bot-img" />
          </div>
          <div
            className={`${sliderIndex === 1 ? 'opacity' : ''}`}
            onMouseOver={() => handleHover(1)}
          >
            <img src={Product2} alt="product2" className="bot-img" />
          </div>
          <div
            className={`${sliderIndex === 2 ? 'opacity' : ''}`}
            onMouseOver={() => handleHover(2)}
          >
            <img src={Product3} alt="product3" className="bot-img" />
          </div>
          <div
            className={`${sliderIndex === 3 ? 'opacity' : ''}`}
            onMouseOver={() => handleHover(3)}
          >
            <img src={Product4} alt="product4" className="bot-img" />
          </div>
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
        <div className="price">
          <div className="hm-right-2">
            <h3 className="amount">$125.00</h3>
            <h4 className="dis">50%</h4>
          </div>
          <h4 className="old">$250.00</h4>
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
            <AiOutlineShoppingCart className="icon" /> Add to cart{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
