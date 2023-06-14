import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

const Bottomnav = () => {
    const navigate = useNavigate()
  return (
    <div>
      <BottomNavigation
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,bgcolor:'grey' }} 
  showLabels
>
  <BottomNavigationAction label="Home" icon={<AiFillHome />} onClick={()=>{navigate('/mapview')}}/>
  <BottomNavigationAction label="location" icon={<BiCurrentLocation/>} onClick={()=>{navigate('/location')}}/>
  <BottomNavigationAction label="Profile" icon={<FaUserAlt/>} onClick={()=>{navigate('/userprofile')}}/>
</BottomNavigation>
    </div>
  )
}

export default Bottomnav
