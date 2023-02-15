import React from 'react';
import Banner from "./banner"
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import VideoIn from './videoIn';
import { useEffect, useRef } from 'react';
import Swiper, { EffectCreative } from 'swiper';
import 'swiper/css';
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

SwiperCore.use([Keyboard, Mousewheel]);
//組合成首頁
export default function Home() {
    const swiperRef = useRef()
    //斜走特效
    useEffect(() => {
        if (swiperRef.current) {
            Swiper.use([EffectCreative]); // Import the EffectCreative module

            new Swiper(swiperRef.current, {
                // Optional parameters
                direction: 'vertical',
                // If you want to enable mousewheel support
                mousewheel: true,

                speed: 1100,
                effect: 'creative', // Set the effect to 'creative'
                creativeEffect: {
                    // Customize the creative effect parameters
                    prev: {
                        translate: ["-100%", "-100%", 0],
                    },
                    next: {
                        translate: ['100%', "100%", 0],
                    },
                },
            });
        }
    }, [swiperRef]);
    return (
        <div className='index' >
            <VideoIn />
            <div ref={swiperRef} className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">  <Banner /></div>
                    <div className="swiper-slide"> <SecondPage /></div>
                    <div className="swiper-slide"><ThirdPage /></div>
                </div>
            </div>



        </div>
    )
}

