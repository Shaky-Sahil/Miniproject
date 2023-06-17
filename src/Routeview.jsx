import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import './App.css'
import Bottomnav from './components/Bottomnav';

const Routeview = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');

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
          L.latLng(8.5041, 76.9917), // Start waypoint
          L.latLng(8.3988, 76.9820), // End waypoint
        ],
      }).addTo(map);

      // Add the routing control to the map
      map.addControl(routingControl);
    }
  }, []);

  return (
    <>
  <div id="map" style={{ width: '100%', height: '90vh' }} />
  <Bottomnav/>
  </>
  );
};

export default Routeview;
