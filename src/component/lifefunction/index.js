import React, { useEffect } from 'react'
import { useLayoutEffect, useRef } from 'react';
// Import animation libary
import { gsap } from "gsap";
import MoveBack from '../config/moveBack';

const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/lifefunction/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requirepng = require.context("../../../img/lifefunction/png", false, /^\.\/.*\.png$/);
const png = requirepng.keys().map(requirepng);
function LifeFunction({ setTransistionStage }) {
    useEffect(() => {
        console.log("lifefunction" + "render...")

    }, []);
    return (
        <>
            <AerialImage setTransistionStage={setTransistionStage} />

        </>

    )
}


export default React.memo(LifeFunction);

function AerialImage({ setTransistionStage }) {
    const animateRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".logo .glow", {
                scaleY: 0,
                duration: 1.8
            }).from(".logo img", {
                opacity: 0,
                duration: 1
            }, "<+1.5").from(".para-container", {
                y: 20,
                opacity: 0,
                duration: 1.2
            }, "<+0.6").from(".para-container .line", {
                scaleY: 0,
                duration: 1.2,
                stagger: 0.1
            }, "<+0.6")
        }, animateRef)
        return () => ctx.revert()
    }, [])
    return (
        <div className="life-function" ref={animateRef}>
            <Cloud />
            <LogoBox />
            <div className="para-container">
                <AerialPara height={"15.5vw"} mr={"30.3vw"}>新北<span>AI</span>產業園區</AerialPara>
                <AerialPara height={"20vw"} mr={"0vw"}>昕境廣場</AerialPara>
                <AerialPara height={"20vw"} mr={"10.2vw"}>扶輪公園</AerialPara>
                <AerialPara height={"22.5vw"} mr={"6vw"}>三井<span>OUTLET</span></AerialPara>
                <AerialPara height={"20.5vw"} mr={"1.5vw"}>三井<span>OUTLET</span>二期</AerialPara>
                <AerialPara height={"21vw"} mr={"3.5vw"}>三立國際影城</AerialPara>
                <AerialPara height={"19.2vw"} mr={"2vw"}><span>A9</span>林口捷運站</AerialPara>
            </div>
            <img src={webp[0].default} className="banner-bg" onLoad={() => setTransistionStage("fadeIn")} />
        </div>
    )
}

function AerialPara(props) {

    return (
        <div className="paraBox" style={{ marginRight: props.mr }}>
            <p>
                {props.children}
            </p>
            <div className="line" style={{ height: props.height }}></div>
        </div>
    )
}
function LogoBox() {
    let dot = [];
    for (let i = 0; i < 40; i++) {
        dot.push(
            {
                x: Math.floor(Math.random() * 100) + "%",
                scale: Math.random() * 1.5 + 0.3,
                duration: Math.random() * 7 + 3 + "s",
                delay: Math.random() * 3 + "s",
            }
        )
    }
    return (
        <div className="logo">
            <img src={svg[1].default} />
            <div className="glow">
                {dot.map((item, i) => {
                    return <div key={i} className='dot' style={{ left: item.x, animationDuration: item.duration, animationDelay: item.delay, transform: `scale(${item.scale})` }}></div>
                })}
            </div>
        </div>
    )
}

function Cloud() {
    return (
        <div className="cloud">
            <img src={png[0].default} style={{ width: "80%", opacity: 0.1, animationDuration: "600s", left: "80%" }} />
            <img src={png[0].default} style={{ width: "40%", opacity: 0.2, animationDuration: "500s", left: "50%" }} />
            <img src={png[0].default} style={{ width: "20%", opacity: 0.4, animationDuration: "300s" }} />
            <img src={png[0].default} style={{ width: "60%", opacity: 0.2, animation: "none", left: "5%", transform: "rotateY(180deg)", top: "8vw" }} />
        </div>
    )
}



