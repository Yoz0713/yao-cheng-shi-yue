import React from 'react';
import Banner from "./banner"
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import FifthPage from './fifthPage';
import ForthPage from './forthPage';
import SixthPage from './sixthPage';
import FullScreen from './fullScreen';
import { useEffect, useRef } from 'react';

//引入redux
import { connect, } from 'react-redux';
import { slideChangeAction } from '../redux/action/slideChange';
//引入swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Mousewheel, EffectFade } from "swiper";
import preloadImage from '../config/preload';

SwiperCore.use([Mousewheel, EffectFade]);
//組合成首頁
function Home({ slideChangeAction, myState, teamState }) {
    const swiperRef = useRef()

    let swiper1;


    //斜走特效
    useEffect(() => {

        if (swiperRef.current) {


            swiper1 = new Swiper(swiperRef.current, {
                // Optional parameters
                direction: 'vertical',
                // If you want to enable mousewheel support
                mousewheel: true,
                speed: 1100,
                effect: "fade",
                fadeEffect: { // configure the fade effect options
                    crossFade: true // enable cross-fading between slides
                },
                on: {

                    slideChangeTransitionStart: function (e) {

                        slideChangeAction(e.activeIndex)
                    }

                },
            });
            swiper1.slideTo(myState, 0)
        }

        preloadImage(require("../../../img/urban/webp/000-urban-bg.webp").default)
    }, []);
    useEffect(() => {
        if (myState == 0) {
            swiperRef.current.swiper.slideTo(myState, 0)
        }

    }, [myState])

    useEffect(() => {
        swiperRef.current.swiper.slideTo(myState, 0)
    }, [teamState])

    return (
        <div className='index'>
            <FullScreen />
            <div ref={swiperRef} className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><Banner /></div>
                    <div className="swiper-slide"><FirstPage /></div>
                    <div className="swiper-slide"> <SecondPage /></div>
                    <div className="swiper-slide"><ThirdPage /></div>
                    <div className="swiper-slide">< ForthPage /></div>
                    <div className="swiper-slide">< FifthPage /></div>
                    <div className="swiper-slide">< SixthPage /></div>
                </div>
            </div>



        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        myState: state.slideReducer.slide,
        teamState: state.teamReducer.flag
    };
};

const mapDispatchToProps = {
    slideChangeAction
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home)); 
