import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Location = () => {
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        // Add more image URLs as needed
      ];
    
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
      };
    
      return (
        <div className="image-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      );
}

export default Location
