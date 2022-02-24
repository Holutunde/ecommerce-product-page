import { createContext, useState, useEffect, useContext } from 'react'
import Product1 from '../images/image-product-1.jpg'
import Product2 from '../images/image-product-2.jpg'
import Product3 from '../images/image-product-3.jpg'
import Product4 from '../images/image-product-4.jpg'

const SliderContext = createContext()

const SliderContextProvider = ({ children }) => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderdata = [Product1, Product2, Product3, Product4]

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
  }, [sliderIndex])

  const data = {
    sliderdata,
    sliderIndex,
    setSliderIndex,
  }

  return (
    <SliderContext.Provider value={data}>{children}</SliderContext.Provider>
  )
}
export { SliderContext, SliderContextProvider, useContext }
