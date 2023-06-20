import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsMapFill } from 'react-icons/bs';


import { useNavigate } from 'react-router-dom';

const Bottomnav = () => {
    const navigate = useNavigate()
  return (
    <div>
      <BottomNavigation
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,bgcolor:'black'}} 
  showLabels
>
  <BottomNavigationAction label="Home" icon={<AiFillHome color='white'/>} onClick={()=>{navigate('/loclist')}}
  sx={{color:'white'}}/>
  <BottomNavigationAction label="Locations" icon={<BiCurrentLocation color='white'/>} onClick={()=>{navigate('/list')}}
  sx={{color:'white'}}/>
  <BottomNavigationAction label="Map" icon={<BsMapFill color='white'/>} onClick={()=>{navigate('/mapview')}}
  sx={{color:'white'}}/>
  <BottomNavigationAction label="Profile" icon={<FaUserAlt color='white'/>} onClick={()=>{navigate('/userprofile')}}
  sx={{color:'white'}}/>
  </BottomNavigation>
    </div>
  )
}

export default Bottomnav
