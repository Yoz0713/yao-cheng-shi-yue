import React from 'react'
import { useRef, useState, useLayoutEffect } from 'react';
import { store } from "../redux/store"
// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function ForthPage() {
    const animateScope = useRef(null)
    const [animate, setAnimate] = useState(null)
    let ctx;
    let gg;


    useLayoutEffect(() => {
        ctx = gsap.context(() => {
            gg = gsap.timeline({ paused: true })
            gg.fromTo(".forth-page-bg :nth-child(1)", {
                clipPath: "polygon(0 0 , 0 100% , 0 100% , 0 0 )",

            }, {
                clipPath: "polygon(0 0 , 0 100% , 100% 100% , 100% 0 )",
                duration: 1.5
            }).fromTo(".forth-page-bg :nth-child(2)", {
                clipPath: "polygon(100% 0% , 100% 100% , 100% 100% , 100% 0% )",

            }, {
                clipPath: "polygon(100% 0% , 100% 100% , 0% 100% , 0% 0% )",
                duration: 0.8
            }, "<+1")
        }, animateScope)
        const unsubscribe = store.subscribe(() => {
            if (store.getState().slideReducer.slide === 3) {
                setTimeout(() => {
                    gg.play()
                }, 800);
            }
        });

        return () => {
            unsubscribe();
            ctx.revert()
        };
    }, [animate]);
    return (
        <section className="forth-page" ref={animateScope}>
            <ForthPageBg />
            <ForthPagePara />
        </section>
    )
}

function ForthPageBg() {
    return (
        <div className="forth-page-bg">
            <img src={svg[7]} />
            <div className="imgBox">
                <img src={webp[13].default} />
                {/* <span className='sampleText'>情境示意圖</span> */}
            </div>

        </div>
    )
}

function ForthPagePara() {
    return (
        <div className="forth-page-para">
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>CONSTRUCTION<br />FLOOR</h3>
            </div>
            <div className="paraBox">
                <p>現代簡約造型風格，講究沈穩優雅品味，深淺色系建材運用及垂直線條分割，增加立面高聳感，適度調和深淺色調搭配，產生層次感。</p>
                <div className="more">
                    <p>MORE</p>
                </div>
            </div>
        </div>
    )
}