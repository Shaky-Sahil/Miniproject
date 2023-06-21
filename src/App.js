import React, {Component, useState} from 'react'
import { Loginform } from './components/Loginform'
import { Cardone } from './components/Cardone'
import { Register } from './components/Register'
import { Cardtwo } from './components/Cardtwo'
import { Cardthree } from './components/Cardthree'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import "./components/Cardone.css"
import Userprofile from './components/Userprofile';
import Location from './components/Location';
import Mapview from './components/Mapview'
import { Getstarted } from './components/Getstarted'
import { Homepage } from './components/Homepage'
import Routeview from './Routeview'
import Listlocations from './components/Listlocations'
import { Topnav } from './components/Topnav'
import Swiper from './components/Swiper'
import {Loclist} from './components/Loclist'
import { Developers } from './components/Developers'
import SettingsPage from './components/SettingsPage'

function App() {

  return (
    <>
 
    <div className='App'> 

    {/* < Getstarted /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Getstarted/>}></Route>
      <Route path='homepage'element={<Homepage/>}></Route>
      <Route path='/mapview'element={<Mapview />}></Route>
      <Route path='/loginform'element={<Loginform />}></Route>
      <Route path='/register'element={<Register />}></Route>
      <Route path='/location'element={<Location />}></Route>
      <Route path='/list'element={<Listlocations />}></Route>
      <Route path='/loclist'element={<Loclist />}></Route>
      <Route path='/userprofile'element={<Userprofile />}></Route>
      <Route path='/navigate'element={<Routeview/>}></Route>
      <Route path='/settings'element={<SettingsPage/>}></Route>

    </Routes>
  </BrowserRouter> 
    </div>
    </>
  );
}

export default App
