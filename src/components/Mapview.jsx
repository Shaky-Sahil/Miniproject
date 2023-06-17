import '../App.css';
import { useEffect, useState } from 'react';
import { maptiler } from 'pigeon-maps/providers'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
import axios from 'axios';
import { RiMapPinUserFill } from 'react-icons/ri';
import { SiGooglemaps } from 'react-icons/si';
import home1 from "../images/home3.png"
import home2 from "../images/home1.jpg"
import { Link } from "react-router-dom";
import Bottomnav from './Bottomnav';
import logo from "../images/logo5.png"
import walk from "../images/walk.png"
import { Trial } from './Trial'
import Slider from 'react-slick';

function Mapview() {
  const MAPTILER_ACCESS_TOKEN = 'OZ4HFDYGoEnutXVI68gC'
  const MAP_ID = 'streets'


function mapTiler (x, y, z, dpr) {
  
  return `https://tile.jawg.io/jawg-dark/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?access-token=ajZ8uEnlLTe657gFBu6Ma8VqVbTMnFRhwQpMtXd9hAZohgRumwkOkLn5LwtXf5Fx`
  
}

const [coordinates,setCoordinates] = useState([8.5241,76.9366])
const [locations,setLocations] = useState([])
const [isActive, setIsActive] = useState(false);
const screenWidth = window.innerWidth
const successCallback = (position) => {
  console.log(position);
  console.log(`coords are : ${position.coords.latitude}, ${position.coords.longitude}`)
  setCoordinates([position.coords.latitude,position.coords.longitude])
  
};

const maptilerProvider = maptiler('i9H4m0q0Yq8Pm7jBEoCV', 'streets')

const errorCallback = (error) => {
  console.log(error);
};

useEffect(()=>{
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  axios.get('https://dull-cyan-marlin-kit.cyclic.app/').then((res)=>{
    res.data.map((r)=>{
    // setLocations((prevState) => ([ ...prevState, [r.lat,r.lon] ]));

    // })
    setLocations(res.data)})
  }).catch((err)=>console.log(err))
},[])

const id = navigator.geolocation.watchPosition(successCallback, errorCallback);

const handleExpand = event => {
  // 👇️ toggle isActive state on click
  setIsActive(current => !current);
};

const images = [
  "https://static.tnn.in/thumb/msid-92690199,width-1280,height-720,resizemode-75/92690199.jpg",
  "https://b.zmtcdn.com/data/pictures/1/19831241/0bc1d316b2d4bb98b2cc9f2755fafeb0.png"
        
      ];
    
      const settings = {
        dots: true,
        // dotsClass: 'slider-dots', // Custom class for dots container
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
      };

  return (
    <>
    
    <div className='home'>
      <img className="home2-bg" src={home2}></img>
    <img className="home-bg" src={home1}></img>
    <img className="home-image" src={logo}></img>
    <div>
    {/* <Trial /> */}
      <div  className={isActive ? 'exp-map-cont' : 'map-cont'}>
    <Map  className='map'  center={coordinates} provider={mapTiler} defaultZoom={12} zoomSnap={false} animate={true}>
      {locations.map((l,i)=>(
      <Overlay key={i} width={50} color='rainbow' anchor={[l.lat,l.lon]} onClick={()=>{alert(l.placeName)}}>
        <SiGooglemaps size={25} onClick={()=>{alert(l.placeName)}} color='white'/>
      </Overlay>
      ))}  
      <Overlay anchor={coordinates}>
      <RiMapPinUserFill size={30} color="orange"/>
      </Overlay>
      </Map>
    </div>
    <div className='exp' onClick={handleExpand}>
    {isActive ? 'Minimize' : 'Expand'}
      </div>
    </div>
    <div className="grid-container">
    </div>
          <div className='Location5'>
            <div className="image-slider-home">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img className="hi" src={image} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
            </Slider>
            </div>
            </div>
            <div>
            {/* <img className="walk" src={walk}></img> */}
              <h1 className='home-text1'>Locations for You</h1>
              
              <button className='button-universal11'>click here</button>
            </div>
          
            
    <Bottomnav/>
    
    </div>
    </>
  );
}

export default Mapview;
