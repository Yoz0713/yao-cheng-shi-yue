import React from 'react'
import { useRef } from 'react';
// Import animation libary
import { gsap } from "gsap";

const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function FifthPage() {
    const animateScope = useRef(null)



    return (
        <section className="fifth-page" ref={animateScope} >
            <FifthPagePara />
            <FifthPageBg />
        </section>
    )
}


function FifthPagePara() {
    return (
        <div className="fifth-page-para">
            <div className="title-box" >
                <h3>SELECTED<br />PREMIUM EQUIPMENT</h3>
                <p>嚴選建材<span>╳</span>國際精品</p>
            </div>
            <div className="paraBox">
                <p>跨步未來 齊肩國際</p>
                <span>科技、健康、高端家居，實現生活無二價值</span>
            </div>
        </div>
    )

}

function FifthPageBg() {
    return (
        <div className="fifth-page-bg">
            <Square style={{ opacity: "0", pointerEvents: "none" }} />
            <Square style={{ opacity: "0", pointerEvents: "none" }} />
            <Square img={svg[6]} img2={svg[7].default} text={"氣密窗"} style3={{ width: "8.5vw" }} />
            <Square style={{ opacity: "0", pointerEvents: "none" }} />
            <Square img={svg[6]} img2={svg[8]} text={"電子鎖"} style3={{ width: "6.8vw" }} />
            <Square img={svg[6]} img2={svg[9]} text={"鑄鋁門"} style3={{ width: "3.95vw" }} />
            <Square img={svg[6]} img2={svg[10]} text={"廚具設備"} style3={{ width: "5.8vw" }} />
            <Square img={svg[6]} img2={svg[11]} text={"衛浴設備"} style3={{ width: "3.54vw" }} />
            <Square img={svg[6]} img2={svg[12]} text={"木地板 "} style3={{ width: "5.2vw" }} />
            <Square img={webp[7].default} text={null} style={{ transform: "scale(1.8) translate(-3.75vw,3.75vw)" }} style2={{ objectPosition: "35% center", width: "150%", height: "150%", left: "-25%", top: "-25%", objectFit: "cover", }} />
            <Square img={svg[6]} img2={svg[13]} text={"淨水器"} style3={{ width: "3.3vw" }} />
            <Square style={{ opacity: "0", pointerEvents: "none" }} />

        </div>
    )
}
function Square({ img, img2, text, style, style2, style3 }) {
    return (
        <div className="imgBox" style={style}>
            <img src={img} style={style2} />
            <div className="box">
                <img src={img2} style={style3} />
                <span>{text}</span>
            </div>
        </div>
    )
}