import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Location.css"
import trees1 from "../images/trees1.png"
import { BottomNavigation } from '@mui/material';
import Bottomnav from './Bottomnav';
import home1 from "../images/home3.png"
import logo from "../images/logo5.png"
import home2 from "../images/home1.jpg"
import { useLocation, useNavigate } from 'react-router-dom';
import standrews from '../images/standrews.jpg'
import kudumbu from '../images/kudumbu.jpg'
import axios from 'axios';

const Location = () => {
  const [images,setImages] = useState();
  const {state} = useLocation();
  const currentLocation = state.currentLocation
  useEffect(()=>{
    axios.get('https://dull-cyan-marlin-kit.cyclic.app/images',{ params: { name: currentLocation.placeName } }).then((res)=>{
     setImages(res.data)
    }
    )
  },[])
  const navigate = useNavigate();
    
      const settings = {
        dots: true,
        // dotsClass: 'slider-dots', // Custom class for dots container
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade:true,
      };

    //   const myStyle1={
    //     backgroundImage: "url('https://wallpaperaccess.com/full/5323823.jpg')",
    //     height: '100vh',
    //     width: '100%',
    //     backgroundSize: 'cover',
        
    // };
      if(images){
      return (
        <>
         <img className="loc2-bg" src={home2}></img>
          <img className="loc3-bg" src={home1}></img> 
         
         <div className="main">
         <img className="loc-image" src={logo}></img>
          <div className='Location'>
            <div className="image-slider">
            <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img className="hi" src={image.image_url} />
                  </div>
                ))}
                {/* <img className="hi" src={'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2018/01/6-priyadarsini_planetarium_.jpg'} /> */}
            </Slider>
          <div className='header1'>
            <h1 style={{textAlign:'left'}}>{currentLocation.placeName}</h1>
          </div>
          {/* <div className='header2'>
            <h2 style={{textAlign:'left'}}>Kuravankonam, Trivandrum</h2>
          </div> */}
          <div >
            {/* <p className='rating'>4.2</p>
            <h2 className='rating-text'>Excellent</h2> */}
            <div style={{textAlign:'left'}}>
              <h4 >OVERVIEW :</h4>
              <div className='btnclass'>
              <button className="btn" onClick={()=>{navigate('/navigate',{state:{destination:currentLocation}})}}>GET DIRECTIONS</button>
              </div>
            </div>   
          </div>
          </div>
        </div>
        
        <div className='paradiv'>
          <p style={{textAlign:'left'}}>
          Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favourite haunt of tourists since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing.
          </p>
          <p className="para2" style={{textAlign:'left'}}>
          The leisure options at this beach are plenty and diverse. Sunbathing, swimming, herbal body toning massages, special cultural programmes and catamaran cruising are some of them.
            </p>
            
        </div>
        </div>
       <Bottomnav/>
        </>
      );
          }

      else{
        return(
          <>no data</>
        )
      }
}

export default Location
