import React from 'react'
import { useState,useRef } from 'react';
import "./Userprofile.css"

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
        
        <div className="profile-screen">
          <div className="profile-content">
            <h1>Profile</h1>
            <div className="profile-details">
            <div className="profile-picture">
              <div className="profile-picture-container" onClick={handlePictureClick}>
                <img src={userProfile.profilePicUrl} alt="Profile Picture" />
              </div>
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handlePictureChange} style={{ display: 'none' }} />
            </div>
            <div className='username'>
              <h2>{userProfile.name}</h2>
              <p>@{userProfile.username}</p>
              <p>Email: {userProfile.email}</p>
              </div>
            </div>
            <div>
            <h1> &ensp;69 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 70</h1>
            <h4>&ensp;Visited &ensp; &ensp; &ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Remaining</h4>
            </div>
            
          </div>
        </div>
      );
}

export default Userprofile
