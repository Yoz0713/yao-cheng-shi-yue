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


function SecondPage({ reduxState, teamState }) {
    const secondPage = useRef();
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const [type, setType] = useState(null)
    const dispatch = useDispatch()
    const title = {
        en: "PROFESSIONAL TEAM",
        ch: {
            left: "建築團隊",
            right: "定義經典"
        }
    }
    const team = [{
        id: 1,
        ch: "耀承建設",
        en: "YAO CHENG CONSTRUCTION",
        url: null
    }, {
        id: 2,
        ch: "建築設計",
        en: "BUILDING DESIGN",
        url: null
    }, {
        id: 3,
        ch: "公設設計",
        en: "POSTULATE DESIGN",
        url: null
    },]

    //三種team進場效果
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (type == "team1") {
                let gg = gsap.timeline()

                gg.to(`.${type} > :nth-child(1)`, {
                    color: "#e0bd76",
                    duration: 0.001
                }, "<").from("svg", {
                    opacity: 0,
                    duration: 0.6,
                    delay: 0.6
                }).fromTo("svg polygon", {
                    strokeDashoffset: 1200,
                    strokeDasharray: 1200,
                }, {
                    strokeDashoffset: 0,
                    duration: 15,
                }, "<").to("svg", {
                    opacity: 0,
                    duration: 6.5,
                }, "<+0.8").from(".cover-logo video", {
                    opacity: 0,
                    duration: 1.5,
                    onStart: () => {
                        videoRef.current.play()
                        videoRef2.current.play()
                    }
                }, "<")

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

        }, [secondPage])
        return () => ctx.revert(); // cleanup
    }, [type])
    //觸觸發第一次type change (team1)
    useEffect(() => {

        if (reduxState === 3) {

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
            <SectionNav handleClick={handleClick} list={team} title={title} />
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
                <Link to={"/team/coporation"}>
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

export function SectionNav({ handleClick, list, title }) {

    return (
        <div className="section-nav">
            <div className="title-box" >
                <h3>{title.en}</h3>
                <p>{title.ch.left}<span>╳</span>{title.ch.right}</p>
            </div>
            <ul className="nav">
                {list.map((item, i) => {
                    return (
                        item.url ?
                            <Link to={item.url} style={{ display: "flex", width: "100%" }} key={item.id} >
                                <li className={`team${i + 1}`} onClick={handleClick}>
                                    <p >{item.ch}</p><p>{item.en}</p>
                                </li>
                            </Link> :

                            <li key={item.id} className={`team${i + 1}`} onClick={handleClick}>
                                <p >{item.ch}</p><p>{item.en}</p>
                            </li>
                    )



                })}
            </ul>
        </div>
    )
}

function BuildingTeam({ type }) {

    return (
        <div className="building-team" style={{ display: type !== "team1" ? "block" : "none" }}>
            <BuildingDesigner type={type} />
            <PostulateDesigner type={type} />
        </div>
    )
}

export function BuildingDesigner({ type }) {
    return (
        <div className="designer" style={{ display: type == "team2" ? "flex" : "none" }}>
            <Link to={"./team/designTeam/building"}>  <img src={webp[1].default} /></Link>
            <div className="title">
                <p>建築設計師</p>
                <img src={svg[3].default} />
            </div>
        </div>
    )
}
export function PostulateDesigner({ type }) {
    return (
        <div className="designer" style={{ display: type == "team3" ? "flex" : "none" }}>
            <Link to={"./team/designTeam/postulate"}>  <img src={webp[2].default} /></Link>
            <div className="title">
                <p>景觀設計師</p>
                <img src={svg[4].default} />
            </div>
        </div>
    )
}

