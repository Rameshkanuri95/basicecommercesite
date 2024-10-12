import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Carousal'; 

const imageUrls = [
  "https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Slide+1",
  "https://via.placeholder.com/600x300/00FF00/000000?text=Slide+2",
  "https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Slide+3",
  "https://via.placeholder.com/600x300/FFFF00/000000?text=Slide+4",
];

const Carousal = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        className="custom-carousel"
      >
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousal;
