import React from 'react'
import { store } from '../redux/store';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// Import animation libary
import { gsap } from "gsap";
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function FifthPage() {
    const animateScope = useRef(null)
    // useLayoutEffect(() => {
    //     let gg;
    //     let ctx = gsap.context(() => {
    //         gg = gsap.timeline({ paused: true })
    //         gg.fromTo(".fifth-page-bg :nth-child(7) img", {
    //             clipPath: "polygon(0 0, 0 100% , 0 100% , 0 0)"
    //         }, {
    //             clipPath: "polygon(0 0, 0 100% , 100% 100% , 100% 0)",
    //             duration: 0.5,
    //             ease: "none",
    //         }).fromTo(".fifth-page-bg :nth-child(5) img", {
    //             clipPath: "polygon(0 0, 0 100% , 0 100% , 0 0)"
    //         }, {
    //             clipPath: "polygon(0 0, 0 100% , 100% 100% , 100% 0)",
    //             duration: 0.5,
    //             ease: "none",
    //         }).fromTo(".fifth-page-bg :nth-child(4)", {
    //             clipPath: "polygon(100% 0% , 100% 100% , 100% 100% , 100% 0%)"
    //         }, {
    //             clipPath: "polygon(100% 0% , 100% 100% , 0% 100% , 0% 0%)",
    //             duration: 0.5,
    //             ease: "none",
    //         }).fromTo(".fifth-page-bg :nth-child(6)", {
    //             clipPath: "polygon(0 0, 0 100% , 0 100% , 0 0)"
    //         }, {
    //             clipPath: "polygon(0 0, 0 100% , 100% 100% , 100% 0)",
    //             duration: 0.5,
    //             ease: "none",
    //         }, "<").fromTo(".fifth-page-bg :nth-child(2)", {
    //             clipPath: "polygon(0 100%, 100% 100% , 100% 100% , 0 100%)"
    //         }, {
    //             clipPath: "polygon(0 100%, 100% 100% , 100% 0% , 0 0%)",
    //             duration: 0.5,
    //             ease: "none",
    //         }, "<+0.3").fromTo(".fifth-page-bg :nth-child(8)", {
    //             clipPath: "polygon(0 0%, 100% 0% , 100% 0% , 0 0%)"
    //         }, {
    //             clipPath: "polygon(0 0%, 100% 0% , 100% 100% , 0 100%)",
    //             duration: 0.5,
    //             ease: "none",
    //         }, "<")
    //     }, animateScope)

    //     const unsubscribe = store.subscribe(() => {
    //         if (store.getState().slideReducer.slide === 4) {
    //             setTimeout(() => {
    //                 gg.play()
    //             }, 800);
    //         }
    //     });
    //     return () => {
    //         unsubscribe()
    //         ctx.revert()

    //     }
    // }, [])

    const handleMouseMove = function (e) {
        console.log(e)
        let gg = gsap.timeline()
        gg.to(".fifth-page-bg .imgBox img", {
            x: `${(e.clientX / 2 - e.pageX) / 35}px`
        })

    }
    return (
        <section className="fifth-page" ref={animateScope} onMouseMove={handleMouseMove}>
            <FifthPagePara />
            <FifthPageBg />
        </section>
    )
}


function FifthPagePara() {
    return (
        <div className="fifth-page-para">
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>CENTURY<br />CRAFT</h3>
            </div>
        </div>
    )

}

function FifthPageBg() {
    return (
        <div className="fifth-page-bg">
            <ImgBox img={webp[0].default} text={"樓板養護"} style={{ opacity: "0", pointerEvents: "none" }} />
            <ImgBox img={webp[14].default} text={"樓板養護"} />
            <ImgBox img={webp[0].default} text={"樓板養護"} style={{ opacity: "0", pointerEvents: "none" }} />
            <ImgBox img={webp[15].default} text={"車道坡度"} style2={{ objectPosition: "30% center" }} />
            <ImgBox img={webp[16].default} text={"樓高3米4"} />
            <ImgBox img={webp[17].default} text={"輕質隔間 "} style2={{ objectPosition: "30% center" }} />
            <ImgBox img={webp[18].default} text={null} style={{ transform: "scale(1.2) translate(-2.05vw,2.05vw)" }} style2={{ objectPosition: "-60% center" }} />
            <ImgBox img={webp[19].default} text={"水泥磅數"} style2={{ objectPosition: "30% center" }} />
            <ImgBox img={webp[0].default} text={"樓板養護"} style={{ opacity: "0", pointerEvents: "none" }} />
        </div>
    )
}
function ImgBox({ img, text, style, style2 }) {
    return (
        <div className="imgBox" style={style}>
            <img src={img} style={style2} />
            <span>{text}</span>
        </div>
    )
}