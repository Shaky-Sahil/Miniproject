import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Location.css"


const Location = () => {
    const images = [
        'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        // Add more image URLs as needed
      ];
    
      const settings = {
        dots: true,
        dotsClass: 'slider-dots', // Custom class for dots container
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
