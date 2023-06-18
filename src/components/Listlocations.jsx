import { Card, CardContent, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import Bottomnav from './Bottomnav'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import burger from "../images/burger.jpg"
import lulu from "../images/lulu.jpg"
import home1 from "../images/home3.png"
import home2 from "../images/home1.jpg"
import { Topnav } from './Topnav';
import museum from '../images/museum.jpg'
import standrews from '../images/standrews.jpg'
import kudumbu from '../images/kudumbu.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css'
import jatayu from '../images/jatayu.jpg'
import ponmudi from '../images/ponmudi.jpg'
import neyyar from '../images/neyyar.jpg'
import kovalam from '../images/kovalam.jpg'
import category1 from '../images/category1.jpg'
import category2 from '../images/category2.jpg'
import category3 from '../images/category3.jpg'
import category4 from '../images/category4.jpg'

import login from '../images/login.png'


const Listlocations = () => {
    const [locations,setLocations] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        
        axios.get('https://dull-cyan-marlin-kit.cyclic.app/').then((res)=>{
          res.data.map((r)=>{
          setLocations(res.data)})
        }).catch((err)=>console.log(err))
      },[])

     
    
          const images = [
              lulu,kudumbu,museum,standrews,burger,
            ];
          
            const settings = {
              dots: true,
              // dotsClass: 'slider-dots', // Custom class for dots container
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              // dotsClass:'dots',
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              arrows: false,
              spaceBetween:200,
              
            };

  return (
    <>
    <Topnav/>
    <div className='loclist'>
      <img className="home2-bg" src={home2}></img>
      <img className="home-bg" src={home1}></img>
      <div className='list'>
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
              <div className='list-carousel'>
                <h1 style={{fontSize:19, marginTop:30,marginLeft:5}}>XPLR FAVORTIES</h1>
                
                <Slider {...settings}>
                {images.map((image, index) => (
                 <div key={index}>
                  <img className="hi" src={image} />
                  </div>
                ))}
                </Slider>
                <h1 style={{fontSize:19, marginTop:25, marginLeft:5}}>Based on category:</h1>
                <Swiper
                modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
      
        scrollbar={{ draggable: true }}
      
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={category1} alt='slide'></img></SwiperSlide>
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={category2} alt='slide'></img></SwiperSlide>
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={category3} alt='slide'></img></SwiperSlide>
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={category4} alt='slide'></img></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <h1 style={{fontSize:19, marginTop:25}}>Locations for you</h1>
     
                
                <Swiper
                modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        
      
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={kovalam} alt='slide'></img></SwiperSlide>
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={ponmudi} alt='slide'></img></SwiperSlide>
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={jatayu} alt='slide'></img></SwiperSlide>
        <SwiperSlide><img style={{width:140, borderRadius:7}} src={neyyar} alt='slide'></img></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <h1 style={{fontSize:19, marginTop:25}}>List of our locations:</h1>
      
               
      </div>
        </Grid>
        <Bottomnav/>
        </div>
    </div>
    </>
  )
}

export default Listlocations
