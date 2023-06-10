import React, {Component, useState} from 'react'
import { Loginform } from './components/Loginform'
import { Register } from './components/Register'

import "./App.css"
import Userprofile from './components/Userprofile';
import Location from './components/Location';

function App() {

  return (
    <>
    <div>     
      <Location/>
    </div>
    </>
  );
}

export default App
