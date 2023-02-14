import React from 'react';
import Banner from "./banner"
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import VideoIn from './videoIn';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
//組合成首頁
export default function Home() {
    const animate = useRef()
    //斜走特效

    return (
        <div className='index' ref={animate}>
            <VideoIn />
            <Banner />
            <SecondPage />
            <ThirdPage />
        </div>
    )
}

