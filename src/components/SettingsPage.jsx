import React from 'react';
import './SettingsPage.css';
import trees1 from "../images/trees1.png"
import { useNavigate } from "react-router-dom";
const SettingsPage = () => {
    const navigate = useNavigate();
  
    return (
        <>
        <img className="settings-bg" src={trees1}></img>
      <div className="settings-container">
         
        <h2 className="settings-title">Settings</h2>
        <div className="settings-buttons">
          <button className="settings-button" onClick={()=>{navigate('/userprofile')}}>Profile</button>
          <button className="settings-button" >App Language</button>
          <button className="settings-button">Contact Us</button>
          <button className="settings-button">About Us</button>
          <button className="settings-button">Privacy and Policy</button>
        </div>
      </div>
   
   </>
      
    );
  };
  
  export default SettingsPage;