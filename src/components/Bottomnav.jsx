import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import { AiFillHome } from 'react-icons/ai';

const Bottomnav = () => {
  return (
    <div>
      <BottomNavigation
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
  showLabels
>
  <BottomNavigationAction label="Home" icon={<AiFillHome />} />
  <BottomNavigationAction label="Favorites" icon={<AiFillHome/>} />
  <BottomNavigationAction label="Nearby" icon={<AiFillHome />} />
</BottomNavigation>
    </div>
  )
}

export default Bottomnav
