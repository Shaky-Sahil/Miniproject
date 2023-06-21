import '../App.css';
import { useEffect, useState } from 'react';
import { maptiler } from 'pigeon-maps/providers'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
import axios from 'axios';
import { RiMapPinUserFill } from 'react-icons/ri';
import { SiGooglemaps } from 'react-icons/si';
import home1 from "../images/home3.png"
import home2 from "../images/home1.jpg"
import { Link, useNavigate } from "react-router-dom";
import Bottomnav from './Bottomnav';
import logo from "../images/logo5.png"
import Slider from 'react-slick';
import { Topnav } from './Topnav';

function Mapview() {

  const navigate = useNavigate()
  const MAPTILER_ACCESS_TOKEN = 'OZ4HFDYGoEnutXVI68gC'
  const MAP_ID = 'streets'


function mapTiler (x, y, z, dpr) {
  
  return `https://tile.jawg.io/jawg-dark/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?access-token=ajZ8uEnlLTe657gFBu6Ma8VqVbTMnFRhwQpMtXd9hAZohgRumwkOkLn5LwtXf5Fx`
  
}

const [coordinates,setCoordinates] = useState([8.5241,76.9366])
const [locations,setLocations] = useState([])
const [isActive, setIsActive] = useState(false);
const [dialogOpen, setDialogOpen] = useState(false);
const [locName, setLocName] = useState('');


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

const handleMarkerClick = (name) => {
  setLocName(name)
  setDialogOpen(true);
};

const handleDialogClose = () => {
  setDialogOpen(false);
};

  return (
    <>
    
    <div >
      
      <div  className={isActive ? 'exp-map-cont' : 'map-cont'}>
    <Map  className='map'  center={coordinates} provider={mapTiler} defaultZoom={12} zoomSnap={false} animate={true}>
      {locations.map((l,i)=>(
      <Overlay key={i} width={50} color='rainbow' anchor={[l.lat,l.lon]} onClick={()=>{handleMarkerClick()}}>
        <SiGooglemaps size={25} onClick={()=>{handleMarkerClick(l.placeName)}} color='white'/>
      </Overlay>
      ))}  
       <Overlay anchor={coordinates}>
      <RiMapPinUserFill size={30} color="orange"/>
      </Overlay>
      {dialogOpen && (
        <dialog open={dialogOpen} onClose={handleDialogClose} onClick={handleDialogClose}>
          {/* Dialog content */}
          <h1>{locName}</h1>
          <p></p>
          <button className='button-map' onClick={handleDialogClose}>close</button>
          <button className='button-map'onClick={()=>{navigate('/location',{ state: { currentLocation:{placeName:locName}} })
        
        }}>View More</button>
        </dialog>
      )}
     
     <Topnav/>
      </Map>
    </div>
    <div className='exp' onClick={handleExpand}>
    {isActive ? 'Minimize' : 'Expand'}
      </div>
    </div>
    <div className="grid-container">
    </div>  
    <Bottomnav/>
    
 
    </>
  );
}

export default Mapview;
