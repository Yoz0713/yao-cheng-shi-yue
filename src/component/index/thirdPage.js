import React from 'react'
import { useRef, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';
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
                <p>當代美學築<span>╳</span>永恆雙子星</p>
            </div>
            <div className="paraBox">
                <p>立地環區⻄路16米與學七街6米雙面大街廓，Twin Tower設計打造雙子星地標建築，大器迎向面萬坪特定農業區，永久綠意景觀，無限棟距，四段式立面切割輕量化建築，天際線簡約框架仰望如家徽識別，經典灰黑質感格栅陽台，低檯度大面積開窗，深邃的光影透進屋內，構築新世代美學生活。</p>
                <Link to="/product">
                    <div className="more">
                        <p>READ MORE</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}