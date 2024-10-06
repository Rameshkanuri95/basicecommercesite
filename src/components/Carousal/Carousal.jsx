import React, { useState, useRef } from "react"
import "./Carousal.scss"

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
  }

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        <i className="fa fa-chevron-left" />
      </button>
      <div className="carousel-slides" ref={carouselRef}>
        {images.map((image, index) => (
          <div
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            key={index}
          >
            <img src={image} alt={`Carousel Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  )
}

export default Carousel
