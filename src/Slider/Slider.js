import React, { useEffect, useState } from 'react'
import './Slider.css'

import nextIcon from '../images/icon-next.svg'
import previousIcon from '../images/icon-previous.svg'

import useSlider from '../hooks/useSlider'
import { SliderContext, useContext } from '../Util/SliderContext'

const Slider = () => {
  const { handleNext, handlePrevious } = useSlider()
  const { sliderdata, sliderIndex } = useContext(SliderContext)

  return (
    <div className="slider">
      <div className="slider-upperContainer">
        my woman
        {/* <div className="slider-previous" onClick={handlePrevious}>
          <img src={previousIcon} alt="next-icon" />
        </div>
        <div className="slide-img">
          <img
            className="sliderImage"
            src={sliderdata[sliderIndex]}
            alt="slide"
          />
        </div>
        <div className="slider-next" onClick={handleNext}>
          <img src={nextIcon} alt="previous-icon" />
        </div> */}
      </div>
    </div>
  )
}

export default Slider
