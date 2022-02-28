import { SliderContext, useContext } from '../Util/SliderContext'

const useSlider = () => {
  const { sliderIndex, setSliderIndex } = useContext(SliderContext)

  const handleNext = () => {
    setSliderIndex(sliderIndex + 1)
  }

  const handlePrevious = () => {
    setSliderIndex(sliderIndex - 1)
  }

  const handleHover = (index) => {
    setSliderIndex(index)
  }

  return {
    handleNext,
    handlePrevious,
    handleHover,
  }
}

export default useSlider
