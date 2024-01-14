"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import oneImga from "@/public/imag9.png";
import twoImg from "@/public/ima2.jpg";
import threeImg from "@/public/image3.png";
import FourImg from "@/public/imag9.png";
import FiveImg from "@/public/image4.png";
import SixImg from "@/public/img3.png";
import sevenImg from "@/public/image4.png";
import eightImg from "@/public/imag9.png";
import nineImg from "@/public/istockphoto-1321017606-612x612.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s: string, time: number, progress: number) => {
    
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  
    
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={oneImga} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={twoImg} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={threeImg} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={FourImg} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={FiveImg} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SixImg} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sevenImg} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={eightImg} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={nineImg} alt="image" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
