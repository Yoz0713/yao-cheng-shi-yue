import React from 'react';
import Banner from "./banner"
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import FifthPage from './fifthPage';
import ForthPage from './forthPage';
import SixthPage from './sixthPage';
import FullScreen from './fullScreen';
import { useEffect, useRef } from 'react';
import GreenBg from "../../../img/layout/webp/000-green-bg.webp"
//引入redux
import { connect, } from 'react-redux';
import { slideChangeAction } from '../redux/action/slideChange';
//引入swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Mousewheel, EffectFade } from "swiper";

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
    }, []);

    useEffect(() => {
        swiperRef.current.swiper.slideTo(myState, 0)
    }, [teamState])

    return (
        <div className='index' style={{ backgroundImage: `url(${GreenBg})`, backgroundSize: "cover", backgroundRepeat: "repeat" }}>
            <FullScreen />
            <div ref={swiperRef} className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><Banner /></div>
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
