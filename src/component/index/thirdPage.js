import React from 'react'
import { useRef, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);

function ThirdPage({ reduxState }) {
    const animateScope = useRef(null)
    let ctx;
    let gg;

    useLayoutEffect(() => {
        let gg;
        let ctx;

        if (reduxState === 3) {
            ctx = gsap.context(() => {
                gg = gsap.timeline({ paused: true })
                gg.to(".third-page-bg .imgBox img", {
                    WebkitMaskSize: "500% 100%",
                    duration: 10
                })
            }, [animateScope])
            setTimeout(() => {
                gg.play()
            }, 800);

            return () => {
                setTimeout(() => {
                    ctx.revert()
                }, 1000)

            }
        }


    }, [reduxState])

    return (
        <section className="third-page" ref={animateScope}>
            <ThirdPageBg />
            <ThirdPagePara />
        </section>
    )
}
export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide
    }
}, null)(ThirdPage)
function ThirdPageBg() {
    return (
        <div className="third-page-bg">
            <div className="imgBox">
                <img src={webp[3].default} />
                {/* <span className='sampleText'>情境示意圖</span> */}
            </div>

        </div>
    )
}

function ThirdPagePara() {
    return (
        <div className="third-page-para">
            <div className="title-box" >
                <h3>ARCHITECTURE CITY</h3>
                <p>豪門禮遇<span>╳</span>A15置產金磚</p>
            </div>
            <div className="paraBox">
                <p>2021年航空城邁入新里程，<br />領航產業+永續城市發展+國際交流的第一站，<br />大夢想 新家園盡在「大園」，<br />座智慧機場六大產業聚「大園」共榮成長。</p>
                <div className="more">
                    <p>READ MORE</p>
                </div>
            </div>
        </div>
    )
}