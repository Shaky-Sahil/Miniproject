import { Card, CardContent, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import Bottomnav from './Bottomnav'
import { Topnav } from './Topnav';
import home1 from "../images/home3.png"
import home2 from "../images/home1.jpg"

const Listlocations = () => {
    const [locations,setLocations] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        
        axios.get('https://dull-cyan-marlin-kit.cyclic.app/').then((res)=>{
          res.data.map((r)=>{
          setLocations(res.data)})
        }).catch((err)=>console.log(err))
      },[])

  return (
    <>

    <div className='listbg'>
      
      <img className="list-image2" src={home2}></img>
      <img className="list-image1" src={home1}></img>
      <div className='list'>
      <Topnav/>
        <h1 style={{color:'white', fontSize:40, marginTop:90, marginBottom:5, marginLeft:12}}>Locations You Can Visit:</h1>
        <Grid container>
          {locations.map((l,i)=>(
            <Grid item xs={12} key={i}>
              <Card sx={{bgcolor: 'white',borderRadius:4,margin:1,width:394,color:'black'}} onClick={()=>{navigate('/location')}}>
                <CardContent>
                  {l.placeName}<br/>
                    type:{l.placeCategory}
                      </CardContent>
                      </Card>
                      </Grid>
                    ))}
        </Grid>
        <Bottomnav/>
        </div>
    </div>
    </>
  )
}

export default Listlocations