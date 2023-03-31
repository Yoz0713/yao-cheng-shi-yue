import React, { useEffect, useLayoutEffect, useRef } from 'react'
import SplitText from "../config/splitText"
import ScaleDrag from "../config/scaleDrag"
import Glow from "../config/glow"
// Import animation libary
import { gsap } from "gsap";

const requireWebp = require.context("../../../img/lifefunction/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/urban/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
function LifeFunction() {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".titleBox h1 span", {
                opacity: 0,
                x: 30,
                stagger: 0.03
            }, "<+0.5").from(".titleBox h3", {
                opacity: 0,
                x: 30,
                stagger: 0.3
            }, "<+0.3").from(".titleBox .line", {
                scaleX: 0, transformOrigin: "left center"
            }, "<+0.3").from(".imageBox", {
                opacity: 0,
                duration: 1.4
            }, "<+0.3")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className="life-function" ref={animateRef}>
            <div className="titleBox">
                <h1> <SplitText text={"LIVING ABILITY"} /> </h1>
                <h3>生活機能圖</h3>
                <div className="line"></div>
            </div>
            <div className="imageBox">
                <ScaleDrag maxRatio={2} zoomImg1={svg[0]} zoomImg2={svg[1]}>
                    <img src={webp[0].default} style={{ width: "100%", height: "100%" }} />
                    {/* <Glow number={20} color={"#fff"} /> */}
                </ScaleDrag>
            </div>
        </section>
    )
}


export default React.memo(LifeFunction);





