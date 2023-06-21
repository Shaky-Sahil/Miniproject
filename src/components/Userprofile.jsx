import React from 'react'
import { useState,useRef } from 'react';
import "./Userprofile.css"
import trees1 from "../images/trees1.png"
import logo from "../images/logo5.png"
import profile from "../images/profile2.png"
import { Link } from "react-router-dom";
import Bottomnav from './Bottomnav';
import home1 from "../images/home3.png"
import home2 from "../images/home1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css'
import jatayu from '../images/jatayu.jpg'
import ponmudi from '../images/ponmudi.jpg'
import neyyar from '../images/neyyar.jpg'
import kovalam from '../images/kovalam.jpg'
import { DropdownMenu } from './DropdownMenu';
import { useNavigate } from "react-router-dom";
import PreLoader from './PreLoader';

const Userprofile = () => {
  const navigate = useNavigate()
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
        <PreLoader />
          <DropdownMenu/>
           <img className="userbg1" src={home2}></img>
          {/* <img className="userbg2" src={home1}></img> */}
          
          {/* <img className="userpage-image" src={logo} onClick={()=>{navigate('/loclist')}}></img> */}
          <img className="profile-image" src={profile}></img>
          
          <Bottomnav/>
          
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
          
          <div className='xplored'>
          <h1 className="visited-num">15</h1>
          <h1 className="remain-num">25</h1>
          <h1 className="visited">XPLORED</h1>
          <h1 className="remain">UNCHARTED LANDS</h1>
          <h1 className='visited-swiper'>Places you have visited</h1>
          <Link style={{textDecoration:"none", color:"Black"}}to="/mapview">
          <button className="more-loc">GET YOUR NEXT WILD JOURNEY</button>
          </Link>
          
          </div>
          <div className='user-swiper'>
           
          <Swiper
                modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={90}
        slidesPerView={3}
        
      
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide  onClick={()=>{navigate('/list')}}><img style={{width:150, borderRadius:1}} src={neyyar} alt='slide'></img></SwiperSlide>
        <SwiperSlide  onClick={()=>{navigate('/list')}}><img style={{width:150, borderRadius:1}} src={ponmudi} alt='slide'></img></SwiperSlide>
        <SwiperSlide  onClick={()=>{navigate('/list')}}><img style={{width:150, borderRadius:1}} src={kovalam} alt='slide'></img></SwiperSlide>
        <SwiperSlide  onClick={()=>{navigate('/list')}}><img style={{width:150, borderRadius:1}} src={jatayu} alt='slide'></img></SwiperSlide>
        <SwiperSlide  onClick={()=>{navigate('/list')}}></SwiperSlide>
      </Swiper>
      </div>
      
      
        </>
      );
}

export default Userprofile
