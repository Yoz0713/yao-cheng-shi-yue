import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HomeSecondPageSvgTree, HomeSecondPageSunlandLogo } from '../config/svgCollection';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"
// Import animation libary
import { gsap } from "gsap";
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);


export default function SecondPage() {
    const secondPage = useRef();
    const [type, setType] = useState("team1")
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()

            gg.to(`.${type} :nth-child(1)`, {
                color: "#c3a457",
                duration: 0.001
            }, "<").fromTo("svg path", {
                strokeDashoffset: 2200,
                strokeDasharray: 2200,
            }, {
                strokeDashoffset: type == "team1" ? 0 : type == "team2" ? 1650 : 450,
                duration: 3,
            }).to("svg", {
                opacity: 0,
                duration: 0.9,
            }, "<+2").from(".cover-logo .imgBox", {
                opacity: 0,
                duration: 0.9,
            }, "<").from(".cover-logo .imgBox img", {
                scale: 1.6,
                duration: 20,
            }, "<")
        }, secondPage)
        return () => ctx.revert(); // cleanup
    }, [type])
    const handleClick = ((e) => {
        setType(e.target.className)
    })
    return (
        <section className="second-page" ref={secondPage}>
            <CoverLogo type={type} />
            <SectionNav handleClick={handleClick} />
        </section>
    )
}

function CoverLogo({ type }) {

    return (
        <div className="cover-logo">
            <HomeSecondPageSunlandLogo type={type} />
            <HomeSecondPageSvgTree type={type} />

            <div className={`imgBox ${type}`} >
                <img src={webp[3].default} style={{ display: type == "team1" ? "block" : "none" }} />
                <img src={webp[4].default} style={{ display: type == "team2" ? "block" : "none" }} />
            </div>

        </div>
    )
}

function SectionNav({ handleClick }) {
    let team = [{
        id: 1,
        ch: "森聯建設",
        en: "SUNLAND DEVELOPMENT"
    }, {
        id: 2,
        ch: "橄欖樹行銷團隊",
        en: "OLIVE TREE TEAM"
    }, {
        id: 3,
        ch: "建築團隊",
        en: "BUILDING TEAM"
    },]
    return (
        <div className="section-nav">
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>PROFESSIONAL<br />TEAM</h3>
            </div>
            <ul className="nav">
                {team.map((item, i) => {
                    return <li key={item.id} className={`team${i + 1}`} onClick={handleClick}><p >{item.ch}</p><p>{item.en}</p></li>
                })}
            </ul>
        </div>
    )
}


