import React from 'react';
import Banner from "./banner"
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import ForthPage from './forthPage';
import FifthPage from './fifthPage';
import SixthPage from './sixthPage';
import VideoIn from './videoIn';
import { useEffect, useRef } from 'react';
//引入redux
import { slideChangeAction } from '../redux/action/slideChange';
import { store } from '../redux/store';
//引入swiper
import Swiper, { EffectCreative } from 'swiper';
import 'swiper/css';
import SwiperCore, { Mousewheel } from "swiper/core";
SwiperCore.use([Mousewheel]);
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
                effect: 'custom', // Set the effect to 'creative'
                creativeEffect: {
                    // Customize the creative effect parameters
                    prev: {
                        translate: ["-100%", "-100%", 0],
                    },
                    next: {
                        translate: ['100%', "100%", 0],
                    },
                },
                on: {

                    slideChangeTransitionStart: function (e) {

                        store.dispatch(slideChangeAction(e.activeIndex))
                    }

                },
            });
        }
    }, [swiperRef]);
    return (
        <div className='index' >
            <VideoIn />
            <div ref={swiperRef} className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide1">  <Banner /></div>
                    <div className="swiper-slide slide2"> <SecondPage /></div>
                    <div className="swiper-slide slide3"><ThirdPage /></div>
                    <div className="swiper-slide slide4">< ForthPage /></div>
                    <div className="swiper-slide slide5">< FifthPage /></div>
                    <div className="swiper-slide slide6">< SixthPage /></div>
                </div>
            </div>



        </div>
    )
}

