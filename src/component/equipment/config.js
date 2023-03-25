import React, { useLayoutEffect, useRef } from 'react';
import FancyBox from "../config/fancyBox";
import gsap from 'gsap';
import SplitText from "../config/splitText"
const requireGlowWebp = require.context("../../../img/equipment/kitchen/glowing", false, /^\.\/.*\.webp$/);
const glow = requireGlowWebp.keys().map(requireGlowWebp);

export function EquipmentList({ data, children, handleClick }) {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".titleBox h2 span", {
                opacity: 0,
                x: 20,
                duration: 0.5,
                stagger: 0.07
            }).from(".titleBox p span", {
                opacity: 0,
                x: 20,
                duration: 1.2,
                stagger: 0.07
            }, "<+0.7").from(".itemBox .box .imgBox :nth-child(1)", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.3,
                filter: "blur(3.5px)"
            }, "<+0.3").from(".itemBox .box p", {
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
            }, "<").from(".itemBox .box .imgBox :nth-child(2)", {
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
            }, "<").from(".itemBox .box .imgBox :nth-child(3)", {
                scale: 0,
                duration: 0.8,
                stagger: 0.3,
            }, "<")
        }, [animateRef])
        return () => ctx.revert()
    }, [])

    return (
        <div className="equipment-list" ref={animateRef}>
            <div className="imgBox">
                <img src={data.img.bg} />
            </div>
            <div className="right">
                <div className="titleBox">
                    <h2><SplitText text={data.title.en} /></h2>
                    <p><SplitText text={data.title.ch} /></p>
                </div>
                <div className="itemBox">
                    {data.item.map((item, i) => {
                        return (
                            <div className="box" key={i}>
                                <div className="imgBox" >
                                    <img src={item.img} style={item.imgStyle} />
                                    <img src={glow[0].default} />
                                    <img src={glow[1].default} />
                                </div>
                                <p>{item.para}</p>
                                <FancyBox handleClick={() => {
                                    handleClick(i)
                                }}>
                                    {children}
                                </FancyBox>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}



export function EquipmentVertic({ data, children }) {
    const animateRef = useRef(null);


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".equipment-vertic > .imgBox .bg", {
                opacity: 0,
                x: -30,
                duration: 3,
                scale: 1.2
            }).from(".equipment-vertic > .imgBox :nth-child(2)", {
                opacity: 0,
                x: -30,
                duration: 0.8,
            }, "<+0.3").from(".equipment-vertic > .imgBox :nth-child(3)", {
                opacity: 0,
                x: -30,
                duration: 0.8,
            }, "<+0.3").from(".equipment-vertic > .imgBox :nth-child(4)", {
                opacity: 0,
                x: -30,
                duration: 0.8,
            }, "<+0.3").from(".bottom > div", {
                opacity: 0,
                x: 30,
                duration: 0.8,
                stagger: 0.3
            }, "<+0.3").from(".bottom > img", {
                opacity: 0,
                x: 30,
                duration: 0.8,
            }, "<+0.3")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <div className="equipment-vertic" ref={animateRef}>
            <div className="imgBox">
                <img src={data.top.bg} className="bg" />
                {data.top.para && data.top.para.map((item, i) => {
                    return (
                        <img src={item} key={i} style={{ ...data.top.paraStyle[i], height: "auto" }} />
                    )
                })}
                {data.top.video && <video src={data.top.video} style={data.top.videoStyle && data.top.videoStyle} controls autoPlay muted loop></video>}
            </div>
            <div className="bottom">
                {children}

                {/* <div className="item-wrapper" style={{ display: "flex" }}>
                    {data.bot.itemBox.map((item, i) => {

                        return (
                            <ItemBox data={item} />
                        )
                    })}
                </div>

                    

                <Brand data={data.bot.brand} />
                {data.bot.detail && <img src={data.bot.detail.img} style={{ ...data.bot.detail.style, marginTop: "4vw" }} />} */}
            </div>
        </div>

    )
}

export function ItemBox({ data }) {
    const paraStyle = {
        width: 'fit-content',
        fontSize: "1.4vw",
        background: "linear-gradient(90deg,#dfbc76 0%, #eca135 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "700",
        whiteSpace: "pre-wrap",
        textAlign: "center"
    }
    const glowStyle = {
        position: "absolute",
        width: "100%",
        left: 0,
        bottom: 0
    }
    return (
        <div className="itemBox" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "16.5vw", height: "auto", position: "relative", margin: data.margin && data.margin }}>
            <div className="imgBox" style={{ display: "flex", justifyContent: "center", height: data.height ? data.height : "8vw", marginBottom: "0.8vw" }}>
                <img src={data.item} style={{ height: "100%", width: "auto" }} />
            </div>
            <div className="paraBox">
                <p style={paraStyle}>{data.para}</p>
            </div>
            <img src={glow[0].default} style={{ ...glowStyle, bottom: "-1vw" }} />
            <img src={glow[1].default} style={{ ...glowStyle, bottom: "-2.9vw", animationName: "glowEquip", animationIterationCount: "infinite", animationDuration: "1.5s" }} />
        </div>
    )
}

export function Brand({ data }) {
    return (
        <div className="brand" style={{ width: data.width }}>
            <div className={`imgBox ${data.clsName && data.clsName}`}>
                <img src={data.img} />
            </div>
            <ul>
                {data.para.map((item, i) => {
                    return (
                        <li className={data.clsName && data.clsName} key={i}>
                            <p>{item}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

