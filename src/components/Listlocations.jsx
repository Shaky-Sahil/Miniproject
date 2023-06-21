import { Card, CardContent, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import Bottomnav from './Bottomnav'
import { Topnav } from './Topnav';
import PreLoader from './PreLoader'

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
    {/* <PreLoader /> */}
      <div className='list'>
      <Topnav/>
        <h1 style={{color:'white', fontSize:20,paddingRight:185, marginTop:120, marginBottom:5, marginLeft:15}}>Locations You Can Visit:</h1>
        <Grid container>
          {locations.map((l,i)=>(
            <Grid item xs={12} key={i}>
              <Card sx={{bgcolor: 'white',height:80,
              borderRadius:4,margin:1,width:394,color:'black', 
              textAlign:'center', justifyContent:'center', alignItems:'center', display:'flex'}} 
              onClick={()=>{navigate('/location',{ state: { currentLocation:l } })}}>
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
    
    </>
  )
}

export default Listlocations