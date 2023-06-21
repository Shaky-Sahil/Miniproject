import React from 'react'
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
import finest1 from "../images/finest1.jpg"
import finest2 from "../images/finest2.jpg"
import finest3 from "../images/finest3.jpg"
import './Loclist.css'
import { Developers } from './Developers';
import PreLoader from './PreLoader';

export const Loclist = () => {
    
    const navigate = useNavigate()

const images = [
    lulu,kudumbu,museum,standrews,burger,
  ];

  const image = [
    finest1,finest2,finest3,
  ];

  const settings = {
    dots: true,
    // dotsClass: 'slider-dots', // Custom class for dots container
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    dotsClass:'dots',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    spaceBetween:200,
  };

  const setting = {
    dots: true,
    // dotsClass: 'slider-dots', // Custom class for dots container
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    dotsClass:'dots',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    spaceBetween:200,
    fade: true,
  };

return (
<>
    <PreLoader />
    <div className='loclist-1'>
        <div> 
        <img className="loclist-image-11" src={home2}></img>

            {/* <img className="loclist-image-1" src={home2}></img> */}

            {/* <img className="loclist-image-2" src={home1}></img> */}
        </div>
        <Topnav/>
        <div className='loclist-carousel-1'>
        
        <h1 style={{fontSize:19, marginTop:30,marginLeft:1}}>XPLR FAVORTIES</h1>  
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} onClick={()=>{navigate('/list')}}>
                <img className="hi" src={image} />
                </div>
            ))}
        </Slider>
        <h1 style={{fontSize:19, marginTop:55, marginLeft:0.5}}>Browse by category:</h1>
        <Swiper
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide onClick={()=>{navigate('/list')}}><img style={{width:140, borderRadius:1}} src={category1} alt='slide'></img></SwiperSlide>
            <SwiperSlide onClick={()=>{navigate('/list')}}><img style={{width:140, borderRadius:1}} src={category2} alt='slide'></img></SwiperSlide>
            <SwiperSlide onClick={()=>{navigate('/list')}}><img style={{width:140, borderRadius:1}} src={category3} alt='slide'></img></SwiperSlide>
            <SwiperSlide onClick={()=>{navigate('/list')}}><img style={{width:140, borderRadius:1}} src={category4} alt='slide'></img></SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </Swiper>
        <h1 style={{fontSize:19, marginTop:25}}>Locations for you</h1>
        <Swiper
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide onClick={()=>{navigate('/location',{ state: { currentLocation:{placeName:'Kovalam Beach'}} })}}><img style={{width:140, borderRadius:1}} src={kovalam} alt='slide'></img></SwiperSlide>
            <SwiperSlide onClick={()=>{navigate('/location',{ state: { currentLocation:{placeName:'Ponmudi'}} })}}><img style={{width:140, borderRadius:1}} src={ponmudi} alt='slide'></img></SwiperSlide>
            <SwiperSlide onClick={()=>{navigate('/location',{ state: { currentLocation:{placeName:'Jatayu'}}})}}><img style={{width:140, borderRadius:1}} src={jatayu} alt='slide'></img></SwiperSlide>
            <SwiperSlide onClick={()=>{navigate('/location',{ state: { currentLocation:{placeName:'Neyyar Dam'}} })}}><img style={{width:140, borderRadius:1}} src={neyyar} alt='slide'></img></SwiperSlide>
            <SwiperSlide onClick={()=>{navigate('/location')}}></SwiperSlide>
        </Swiper>
        <h1 style={{fontSize:19, marginTop:40, marginBottom:15}}>Trivandrum's Finest</h1>
        <Slider {...setting}>
            {image.map((image, index) => (
                <div key={index} onClick={()=>{navigate('/list')}}>
                <img className="hi" src={image} />
                </div>
            ))}
        </Slider>
        
        <h1 style={{fontSize:19, marginTop:35}}>View All Locations</h1>
        <button className='loclist-btn' onClick={()=>{navigate('/list')}}>Click Here</button>
        <Bottomnav/>
        </div>
    </div>
</>
)
}


