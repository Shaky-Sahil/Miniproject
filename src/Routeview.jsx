import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import './App.css'
import Bottomnav from './components/Bottomnav';
import { useLocation } from 'react-router-dom';

const Routeview = () => {
  const {state} = useLocation();
  const [coordinates,setCoordinates] = useState([8.5241,76.9366])
  const successCallback = (position) => {
    console.log(position);
    console.log(`coords are : ${position.coords.latitude}, ${position.coords.longitude}`)
    setCoordinates([position.coords.latitude,position.coords.longitude])
    
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  const destination = state.destination
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    const mapContainer = document.getElementById('map');
    console.log(destination)

    if (mapContainer && !mapContainer._leaflet_id) {
      // Create a Leaflet map instance
      const map = L.map(mapContainer).setView([51.505, -0.09], 13);

      // Create a TileLayer for the map
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
      }).addTo(map);

      // Create a Leaflet Routing Machine instance
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(coordinates[0], coordinates[1]), // Start waypoint
          L.latLng(destination.lat, destination.lon), // End waypoint
        ],
        draggableWaypoints: false,
      }).addTo(map);

      // Add the routing control to the map
      map.addControl(routingControl);
    }
  }, []);
  const id = navigator.geolocation.watchPosition(successCallback, errorCallback);

  return (
    <div>
  <div id="map" style={{ width: '100%', height: '93.5vh' }} />
  <Bottomnav/>
  </div>
  );
};

export default Routeview;
