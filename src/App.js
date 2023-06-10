import React, {Component, useState} from 'react'
import { Loginform } from './components/Loginform'
import { Cardone } from './components/Cardone'
import { Register } from './components/Register'
import { Cardtwo } from './components/Cardtwo'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"

function App() {

  return (
    <>
    <div className='App'> 
    <BrowserRouter>

    <Routes>
      <Route path='/'element={<Cardone/>}></Route>
      <Route path='/cardtwo'element={<Cardtwo/>}></Route>
    </Routes>
  </BrowserRouter>
    </div>
    </>
  );
}

export default App
