import '../App.css';
import { useEffect, useState } from 'react';
import { maptiler } from 'pigeon-maps/providers'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
import axios from 'axios';
import { RiMapPinUserFill } from 'react-icons/ri';
import trees1 from "../images/trees1.png"
import { Link } from "react-router-dom";

function Mapview() {
  const MAPTILER_ACCESS_TOKEN = 'OZ4HFDYGoEnutXVI68gC'
  const MAP_ID = 'streets'


function mapTiler (x, y, z, dpr) {
  //return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
  //return `https://{s}.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}{r}.png`
  return `https://tile.jawg.io/jawg-light/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?access-token=ajZ8uEnlLTe657gFBu6Ma8VqVbTMnFRhwQpMtXd9hAZohgRumwkOkLn5LwtXf5Fx`
  //return `https://tile.jawg.io/5cbaaabc-fad9-4b10-85cc-83a4d9c38c44/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?access-token=ajZ8uEnlLTe657gFBu6Ma8VqVbTMnFRhwQpMtXd9hAZohgRumwkOkLn5LwtXf5Fx`
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

  return (
    <>
    <img className="user-bg" src={trees1}></img>
    <div className="App">
      Mini project
      <div  className={isActive ? 'map-cont' : 'exp-map-cont'}>
    <Map  className='map'  defaultCenter={[8.5039,76.9511]} provider={mapTiler} defaultZoom={13}>
      
      <ZoomControl/>      
      {locations.map((l,i)=>(
      <Marker key={i} width={50} color='black' anchor={[l.lat,l.lon]} onClick={()=>{alert(l.placeName)}}/>
      ))}  
      <Overlay anchor={coordinates}>
      <RiMapPinUserFill size={50}/>
      </Overlay>
      </Map>
    </div>
    <div className='exp' onClick={handleExpand}>
        Expand
      </div>
    </div>
    <Link style={{textDecoration:"none", color:"Black"}}to="/userprofile">
    <button className="user-btn">User Profile</button>
    </Link>
    <Link style={{textDecoration:"none", color:"Black"}}to="/location">
    <button className='loc-btn'>locations</button>
    </Link>
    </>
  );
}

export default Mapview;
