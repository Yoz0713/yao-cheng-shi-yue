import React, { useLayoutEffect, useRef } from 'react';
import { ItemBox } from './config';
import gsap from 'gsap';
import window from "../../../video/equipment/window.mp4"
const requireWebp = require.context("../../../img/equipment/window/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/equipment/window/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Window() {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".window > .imgBox img", {
                opacity: 0,
                x: -30,
            }).from(".window > .imgBox video", {
                opacity: 0,
                x: -30,
            }, "<+0.3").from(".window > .paraBox > div", {
                opacity: 0,
                x: -30,
                stagger: 0.3
            }, "<+0.3")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='window' ref={animateRef}>
            <div className="imgBox">
                <img src={webp[0].default} />
                <video src={window} controls muted autoPlay loop></video>
            </div>
            <div className="paraBox">
                <div className="title">
                    <img src={svg[0].default} />
                </div>
                <div className="para">
                    <p>錦鋐企業公司成立至今三十餘年來，一步一腳印不斷研發創新，所推出之『錦鋐隔音氣密窗』系列產品皆以超越C.N.S之標準，並有多項產品取得專利，使得在居家生活中更為方便與舒適，並降低成本，以回饋社會大眾。</p>
                </div>
                <div className="box">
                    <h6>氣密窗須具備下列特性:</h6>
                    <p>減少濕氣變化:維持室內乾燥,不易潮。</p>
                    <p>降低風切聲:不必擔心風切聲的干擾。</p>
                    <p>降低對流:維持室內恆溫,達到節能效果。</p>
                </div>
                <ItemBox data={{ item: webp[1].default, para: "錦鋐氣密窗", height: "9.5vw" }} />
            </div>
        </section>
    )
}
