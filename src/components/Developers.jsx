import React from "react";
import noel from '../images/noel.png'
import sahil from '../images/sahil.png'
import abhinav from '../images/abhinav.png'
import yash from '../images/yash.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css'

export const Developers = () => {

    return(
        <div className="developers-desc" style={{marginTop:110}}>
        <h1 style={{fontSize:20, color:"white", marginBottom:20}}>Our Developers</h1>
        <Swiper
                modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        
      
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <img style={{width:130, borderRadius:1}} src={sahil} alt='slide'></img>
            <h1 className="developers-name">SAHIL SHAIKH</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:130, borderRadius:1}} src={yash} alt='slide'></img>
            <h1 className="developers-name">YASH KAMNANI</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:130, borderRadius:1}} src={abhinav} alt='slide'></img>
            <h1 className="developers-name">ABHINAV NAIR</h1>    
        </SwiperSlide>
        <SwiperSlide>
            <img style={{width:130, borderRadius:1}} src={noel} alt='slide'></img>
            <h1 className="developers-name">NOEL CASIMIR SALASTIN </h1>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
        </div>    
    )
}