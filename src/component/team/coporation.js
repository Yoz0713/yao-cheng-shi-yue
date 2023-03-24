import React, { useLayoutEffect, useRef, useState } from 'react'
import SpliText from '../config/splitText';
import gsap from 'gsap';


const requireWebp = require.context("../../../img/team/coporation/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/team/coporation/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

export const Coporation = () => {
    const animateRef = useRef(null);
    const [content, setContent] = useState(1)



    const switchContent = (index) => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.to(".yao-cheng", {
                opacity: 0,
                duration: 0.5
            }).to(".yao-cheng-concept", {
                opacity: 0,
                duration: 0.5
            }, '<').then(() => {
                setContent(index)
            })
        }, [animateRef])
    }
    return (
        <div className='coporation' ref={animateRef}>
            {content == 1 ? <YaoCheng animateRef={animateRef} /> : <YaoChengConcept animateRef={animateRef} />}

            <YaoChengNav content={content} setContent={setContent} switchContent={switchContent} />
        </div>

    )
}

function YaoCheng() {
    const animateRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".yao-cheng > .imgBox img", {
                x: -40,
                duration: 0.8,
                opacity: 0,
                delay: 0.1
            }).from(".right .title-box h3 span", {
                x: 80,
                duration: 0.6,
                stagger: 0.03,
                opacity: 0,
            }, "<+0.3").from(".right .title-box p", {
                x: 80,
                duration: 0.6,
                opacity: 0,
            }, "<+0.3").from(".right .para p", {
                x: 40,
                duration: 0.6,
                opacity: 0
            }, "<+0.3").from(".right .concept .box", {
                y: 20,
                duration: 0.6,
                opacity: 0,
                stagger: 0.3
            }, "<+0.2")
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    const para = {
        title: {
            en: `COMPANY CONCEPT`,
            ch1: `光耀匠心`,
            ch2: `傳承幸福`
        },
        paragraph: {
            para1: `耀承建設秉持「厚積薄發，慢工出細活」的職人匠心，將建築視為手作工藝般分外講究，從選地、規劃、選材直至施工，所有階段作業皆力求盡善盡美，從細節處起嚴格把關，不搶快、只求好，盡其所能深化每一塊土地價值、昇華每一幢建築美學，只為砌築出時代住人的理想居所，滿足跨世代的生活觀，進而創造獨有的品牌榮耀。`,
            para2: [
                "以永續持續發展為企業核心價值，建立一個更加公平、繁榮和可持續的未來。",
                "堅守誠信原則，與客戶建立信任和口碑。",
                "提供優質的產品和服務，為客戶創造價值。",
            ]
        },
        img: {
            main: [svg[2].default, svg[3].default, svg[4].default],
            glow: svg[0],
            round: svg[1]
        }
    }

    return (
        <>
            <div className="yao-cheng" ref={animateRef}>
                <ImgBox url={webp[0].default} />
                <div className="right">
                    <ParaBox para={para} />
                </div>

            </div>

        </>


    )
}
function YaoChengConcept() {
    const animateRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".right .title-box h3 span", {
                x: 80,
                duration: 0.6,
                stagger: 0.03,
                opacity: 0,
            }, "<+0.5").from(".right .title-box p", {
                x: 80,
                duration: 0.6,
                opacity: 0,
            }, "<+0.5").from(".right .para p", {
                x: 40,
                duration: 0.6,
                opacity: 0
            }, "<+0.5").from(".right .concept .box", {
                y: 20,
                duration: 0.6,
                opacity: 0,
                stagger: 0.3
            }, "<+0.4")
        }, [animateRef])
        return () => ctx.revert()
    }, []);

    const para = {
        title: {
            en: `COMPANY CONCEPT`,
            ch1: `光耀引領 全球視野`,
            ch2: `國際規格 六大堅持`
        },
        paragraph: {
            para1: `遠見大環境變化節奏加快，「耀承建設」與時俱進，積累專業，前瞻各地都會的發展趨勢，精準把握其中的價值精華，偕同業界精英團隊盡數發揮地段優勢，更以尖端技術打磨建築，為住戶完善規劃空間機能，無論實際起居或情感涵養全面顧及，將「一間房」作為「一世情」永續傳承。`,
            para2: [
                "節能永續，宜居有道！打造一個\n舒適、綠色、節能的宜居生活。",
                "注重純淨水資源，創造\n更健康的居住環境。",
                "讓「家」成為您安心生活的\n堡壘，是我們的使命。",
                "踏入空間便能感受科技與設計\n結合帶來的舒服、便利與溫暖",
                "以愛共築、全齡規劃，\n滿足享受生活。",
                "實現安心永住的精神，\n打造友善的生活空間。"
            ]
        },
        img: {
            main: [webp[1].default, webp[2].default, webp[3].default, webp[4].default, webp[5].default, webp[6].default],
            icon: [svg[5], svg[6], svg[7], svg[8], svg[9], svg[10]]
        }
    }

    return (
        <>
            <div className="yao-cheng-concept" ref={animateRef}>

                <div className="right">
                    <ParaBox para={para} />
                </div>

            </div>

        </>


    )
}
function YaoChengNav({ content, switchContent }) {

    return (
        <div className="nav">
            <ul>
                <li style={{ color: content == 1 ? "#d9b875" : "#fff" }} onClick={() => {
                    switchContent(1)
                }}>耀承建設</li>
                <li style={{ color: content == 2 ? "#d9b875" : "#fff" }} onClick={() => {
                    switchContent(2)
                }}>六大堅持</li>
            </ul>
        </div>
    )
}



//共用
function ImgBox({ url }) {
    return (
        <div className="imgBox">
            <img src={url} />
        </div>
    )
}

function ParaBox({ para, mb }) {
    return (
        <div className="paraBox">
            <div className="title-box" >
                <h3>{<SpliText text={para.title.en} />}</h3>
                <p>{para.title.ch1}<span>╳</span>{para.title.ch2}</p>
            </div>
            <div className="para">
                <p style={{ whiteSpace: "pre-wrap", marginBottom: mb }}>{para.paragraph.para1}</p>

            </div>
            <div className="concept">
                {para.img.main.map((item, i) => {
                    return (
                        <div className="box">
                            <div className="imgBox">
                                <img src={item} />
                                {para.img.icon ? <>
                                    <img src={para.img.icon[i]} />
                                </> :
                                    <>
                                        <img src={para.img.glow} />
                                        <img src={para.img.glow} />
                                        <img src={para.img.round} />
                                    </>
                                }

                            </div>
                            <p><p style={{ whiteSpace: "pre-wrap" }}>{para.paragraph.para2[i]}</p></p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

