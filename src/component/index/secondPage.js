import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HomeSecondPageYaoChengLogo } from '../config/svgCollection';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Video from "../../../video/glowing2-logo.mp4"
// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { moveToBuildingTeam } from '../redux/action/buildingTeam';

gsap.registerPlugin(ScrollTrigger);


const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requirePng = require.context("../../../img/index/png", false, /^\.\/.*\.png$/);
const png = requirePng.keys().map(requirePng);

function SecondPage({ reduxState, teamState }) {
    const secondPage = useRef();
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const [type, setType] = useState(null)
    const dispatch = useDispatch()


    //三種team進場效果
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (type == "team1") {
                let gg = gsap.timeline()

                gg.to(`.${type} > :nth-child(1)`, {
                    color: "#e0bd76",
                    duration: 0.001
                }, "<").fromTo("svg polygon", {
                    strokeDashoffset: 6100,
                    strokeDasharray: 6100,
                }, {
                    strokeDashoffset: 0,
                    duration: 3,
                }).to("svg", {
                    opacity: 0,
                    duration: 0.9,
                }, "<+2").from(".cover-logo video", {
                    opacity: 0,
                    duration: 0.9,
                }, "<").then(() => {
                    videoRef.current.play()
                    videoRef2.current.play()
                })

            } else {

                let gg = gsap.timeline()
                gg.to(`.${type} > :nth-child(1)`, {
                    color: "#e0bd76",
                    duration: 0.001
                }, "<").from(`.building-team`, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8
                }, "<").from(`.building-team .thumb img`, {
                    y: 25,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.2
                }, "<+0.6")

            }

        }, secondPage)
        return () => ctx.revert(); // cleanup
    }, [type])
    //觸觸發第一次type change (team1)
    useEffect(() => {

        if (reduxState === 1) {

            setType(null);
            setTimeout(() => {
                setType(teamState);
            }, 400);
        }



    }, [reduxState]);
    const handleClick = ((e) => {
        dispatch(moveToBuildingTeam(e.target.className))
        setType(e.target.className)
    })
    return (
        <section className="second-page" ref={secondPage}>
            <CoverLogo type={type} videoRef={videoRef} videoRef2={videoRef2} />
            <SectionNav handleClick={handleClick} />
        </section>
    )
}
export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide,
        teamState: state.teamReducer.team
    }

}, null)(SecondPage)
function CoverLogo({ type, videoRef, videoRef2 }) {

    return (
        <div className='second-page-left'>
            <div className="cover-logo " style={{ display: type == "team1" ? "block" : "none" }} >
                <Link to={"/1"}>
                    <HomeSecondPageYaoChengLogo type={type} />
                </Link>
                <div className={`videoBox`} >
                    <video ref={videoRef} src={Video} muted playsInline loop ></video>
                </div>
            </div>
            <div className="cover-logo opposite" style={{ display: type == "team1" ? "block" : "none" }} >

                <HomeSecondPageYaoChengLogo type={type} />

                <div className={`videoBox`} >
                    <video ref={videoRef2} src={Video} muted playsInline loop ></video>
                </div>
            </div>
            <BuildingTeam type={type} />
        </div>

    )
}

function SectionNav({ handleClick }) {
    let team = [{
        id: 1,
        ch: "耀承建設",
        en: "YAO CHENG CONSTRUCTION"
    }, {
        id: 2,
        ch: "建築設計",
        en: "BUILDING DESIGN"
    }, {
        id: 3,
        ch: "公設設計",
        en: "POSTULATE DESIGN"
    },]
    return (
        <div className="section-nav">
            <div className="title-box" >
                <h3>PROFESSIONAL TEAM</h3>
                <p>建築團隊<span>╳</span>定義經典</p>
            </div>
            <ul className="nav">
                {team.map((item, i) => {
                    return <li key={item.id} className={`team${i + 1}`} onClick={handleClick}><p >{item.ch}</p><p>{item.en}</p></li>
                })}
            </ul>
        </div>
    )
}

function BuildingTeam({ type }) {

    return (
        <div className="building-team" style={{ display: type !== "team1" ? "block" : "none" }}>
            <div className="designer" style={{ display: type == "team2" ? "flex" : "none" }}>
                <Link to={"/1"}>  <img src={webp[1].default} /></Link>

                <div className="title">
                    <p>建築設計師</p>
                    <img src={svg[3].default} />
                </div>
            </div>
            <div className="designer" style={{ display: type == "team3" ? "flex" : "none" }}>
                <Link to={"/1"}>  <img src={webp[2].default} /></Link>
                <div className="title">
                    <p>公設設計師</p>
                    <img src={svg[4].default} />
                </div>
            </div>
        </div>
    )
}

