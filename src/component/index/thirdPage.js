import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HomeThirdPageCover } from "../config/svgCollection"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"
// Import animation libary
import { gsap } from "gsap";
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requirePng = require.context("../../../img/index/png", false, /^\.\/.*\.png$/);
const png = requirePng.keys().map(requirePng);


export default function ThirdPage() {
    return (
        <section className="third-page">
            <SectionNav />
            <div className="third-page-bg">
                <SvgCover />
                <Swiper
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 6400
                    }}
                    speed={1}
                    onSwiper={(e) => {


                    }} //第一次執行
                    onSlideChange={(e) => {


                    }

                    }
                >
                    <SwiperSlide>
                        <div className='imgBox' >
                            <img src={webp[5].default} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='imgBox'>
                            <img src={webp[10].default} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='imgBox'>
                            <img src={webp[10].default} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </section>
    )
}

function SectionNav({ handleClick }) {
    let item = [{
        id: 1,
        ch: "都市計畫",
        en: "URBAN PLANNING"
    }, {
        id: 2,
        ch: "生活機能圖",
        en: "LIFE FUNCTION"
    },]
    return (
        <div className="section-nav">
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>LOCATION<br />LIFE</h3>
            </div>
            <ul className="nav">
                {item.map((item, i) => {
                    return <li key={item.id} className={`team${i + 1}`} onClick={handleClick}><p >{item.ch}</p><p>{item.en}</p></li>
                })}
            </ul>
        </div>
    )
}

function SvgCover() {
    return (
        <div className="svg-cover">
            <HomeThirdPageCover />
        </div>
    )
}