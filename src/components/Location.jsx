import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Location.css"


const Location = () => {
    const images = [
        'https://b.zmtcdn.com/data/pictures/3/20224803/a4e73166f95176b77b6451149d1bd2f5.jpeg',
        'https://img.restaurantguru.com/c0da-Restaurant-Al-Taza-Trivandrum-food.jpg',
        'data:image/jpeg;base64,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',

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

    //   const myStyle1={
    //     backgroundImage: "url('https://wallpaperaccess.com/full/5323823.jpg')",
    //     height: '100vh',
    //     width: '100%',
    //     backgroundSize: 'cover',
        
    // };
    
      return (
        <>
         <div className="main">
        <div className='Location'>
          <div className="image-slider">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img className="hi" src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          <div className='header1'>
            <h1 style={{textAlign:'left'}}>Al Taza</h1>
          </div>
          <div className='header2'>
            <h2 style={{textAlign:'left'}}>Kuravankonam, Trivandrum</h2>
          </div>
          <div >
            <span className="star">&#9733;&#9733;&#9733;&#9733;</span>
            <p className='rating'>4.2</p>
            <h2 className='rating-text'>Excellent</h2>
            <div style={{textAlign:'left'}}>
              <h4 className='slider-text'>OVERVIEW :</h4>
            </div>   
            </div>
          </div>
        </div>
        <div className='paradiv'>
          <p style={{textAlign:'left'}}>
          Lip-smacking shawarma served with loads of precision and hygiene has become everyone's favorite in no time.
          </p>
          <p className="para2" style={{textAlign:'left'}}>Our efforts and promises are on maintaining the consistency to serve our customers, the amazing mouth watering delicacy. Offering an exclusive and focused menu packed with Lebanese favorites and contemporary dishes, Al Taza has undoubtedly become the household name of Shawarma for Keralites since 2019. We have our exclusive outlets in Aluva, Edappally, Kaloor, Kalamassery, Perumbavoor, Calicut, Thiruvananthapuram, Kollam and Bangalore.
            </p>
        </div>
        <button className='btn'>GET DIRECTIONS</button>
        </div>
        </>
      );
    
}

export default Location
