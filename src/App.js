import React, {Component, useState} from 'react'
import { Loginform } from './components/Loginform'
import { Cardone } from './components/Cardone'
import { Register } from './components/Register'
import { Cardtwo } from './components/Cardtwo'
import { Cardthree } from './components/Cardthree'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "./App.css"
import "./components/Cardone.css"
import Userprofile from './components/Userprofile';
import Location from './components/Location';

function App() {

  return (
    <>
 
    <div className='App'> 
    <Location/>
    {/* <BrowserRouter>

    <Routes>
      <Route path='/'element={<Cardone/>}></Route>
      <Route path='/cardtwo'element={<Cardtwo/>}></Route>
      <Route path='/cardthree'element={<Cardthree/>}></Route>
    </Routes>
  </BrowserRouter> */}
    </div>
    </>
  );
}

export default App
