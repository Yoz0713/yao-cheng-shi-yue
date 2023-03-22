import React from 'react'
import { useRef, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
// Import animation libary
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
function ForthPage({ reduxState }) {
    const animateRef = useRef(null);
    let animationDone = false

    useLayoutEffect(() => {
        let gg;
        let ctx;

        if (reduxState === 4) {
            ctx = gsap.context(() => {
                gg = gsap.timeline({ paused: true })
                gg.from(".forth-page-card .card", {
                    opacity: 0,
                    y: "2.5vw",
                    stagger: "0.3"
                }).fromTo(".forth-page-card .card .imgBox", {
                    rotateY: 60,

                }, {
                    rotateY: 0,
                    stagger: 0.3,
                    duration: 1.4
                }, "<").then(() => {
                    animationDone = true
                })
            }, animateRef)
            setTimeout(() => {
                gg.play()
            }, 800);

            return () => {
                ctx.revert()
            }
        }


    }, [reduxState])

    const handleMouseMove = function (e) {

        let gg = gsap.timeline({ paused: true })
        gg.to(".forth-page-card .imgBox img", {
            x: `${(animateRef.current.clientWidth / 2 - e.pageX) / 35}px`
        }).to(".forth-page-card .imgBox", {
            rotateY: (animateRef.current.clientWidth / 2 - e.pageX) / 75,
            // rotateX: (animateRef.current.clientHeight / 2 - e.pageY) / 75,
        })
        if (animationDone == true) {
            gg.play()
        }
    }
    return (
        <section className="forth-page" ref={animateRef} onMouseMove={handleMouseMove}>
            <ForthPagePara />
            <ForthPageCard />
        </section>
    )
}
// connect hoc方式綁定forth-page
export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide
    }
}, null)(ForthPage)

function ForthPagePara() {
    return (
        <div className="forth-page-para">
            <div className="title-box" >
                <h3>CONSTRUCTION METHOD</h3>
                <p>極致工法</p>
            </div>
        </div>
    )

}
function ForthPageCard() {
    return (
        <div className="forth-page-card">
            <Link to={"./method/structure"}>
                <Card img={webp[4].default} num={"01."} text={"結構工法"} style2={{ objectPosition: "center 0%" }} />
            </Link>
            <Link to={"./method/waterProof"}>
                <Card img={webp[5].default} num={"02."} text={"防水工法"} style2={{ objectPosition: "bottom left" }} />
            </Link>
            <Link to={"./method/sweet"}>
                <Card img={webp[6].default} num={"03."} text={"貼心工法"} />
            </Link>



        </div>
    )
}
function Card({ img, num, text, style, style2 }) {
    return (
        <div className="card" style={style}>
            <div className="imgBox">
                <div className="box">
                    <img src={img} style={style2} />
                </div>
                <span>{num}</span>
                <img src={svg[5]} />
            </div>
            <div className="paraBox">
                <h6>{text}</h6>
            </div>
        </div>
    )
}