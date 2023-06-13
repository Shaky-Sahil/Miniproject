import React from 'react'
import { useState,useRef } from 'react';
import "./Userprofile.css"
import trees1 from "../images/trees1.png"
import logo from "../images/logo3.jpg"
import { Link } from "react-router-dom";

const Userprofile = () => {
    
    const [userProfile, setUserProfile] = useState({
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        profilePicUrl: 'https://example.com/profile-pic.jpg',
      });
    
      const fileInputRef = useRef(null);
    
      const handlePictureClick = () => {
        fileInputRef.current.click();
      };
    
      const handlePictureChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
          const newProfilePicUrl = e.target.result;
          setUserProfile((prevProfile) => ({ ...prevProfile, profilePicUrl: newProfilePicUrl }));
        };
    
        reader.readAsDataURL(file);
      };
    
      return (  
        <>
          <img className="user-bg" src={trees1}></img>
          <img className="userpage-image" src={logo}></img>
          <div className="profile-screen">
            <div className="profile-content">
              <h1 className='profile'>Profile</h1>
                <div className="profile-details">
                  <div className="profile-picture">
                    <div className="profile-picture-container" onClick={handlePictureClick}>
                      <img src={userProfile.profilePicUrl} alt="" />
                    </div>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handlePictureChange} style={{ display: 'none' }} />
                  </div>
                </div>
                <div>
                    <h1 className="name">{userProfile.name}</h1>
                    <h2 className="user-name">@{userProfile.username}</h2>
                    {/* <h2 className="emailid">Email: {userProfile.email}</h2> */}
                  </div>
            </div>
          </div>
          <h1 className="visited-num">15</h1>
          <h1 className="remain-num">45</h1>
          <h1 className="visited">XPLORED</h1>
          <h1 className="remain">UNCHARTED LANDS</h1>
          <Link style={{textDecoration:"none", color:"Black"}}to="/mapview">
          <button className="more-loc">GET YOUR NEXT WILD JOURNEY</button>
          </Link>
        </>
      );
}

export default Userprofile
