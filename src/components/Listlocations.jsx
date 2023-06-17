import { Card, CardContent, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import Bottomnav from './Bottomnav'

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
    <div className='list'>
         <Grid container>
                {locations.map((l,i)=>(
                    <Grid item xs={12} key={i}>
                    <Card sx={{bgcolor: 'black',borderRadius:4,margin:1,color:'white'}} onClick={()=>{navigate('/location')}}>
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
  )
}

export default Listlocations
