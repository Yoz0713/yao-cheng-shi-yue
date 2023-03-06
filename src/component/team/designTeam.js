import React, { useLayoutEffect, useRef } from 'react'
import sunlandSvg from "../../../img/index/svg/002-slogan.svg"
import { Routes, Route } from 'react-router-dom';
import spliText from '../config/splitText';
import gsap from 'gsap';
const requireWebp = require.context("../../../img/team/design/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/team/design/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);


export const DesignTeam = () => {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()

            gg.fromTo(".img-box", {
                clipPath: "polygon(0 0 , 0 100% , 0 100% , 0 0)"
            }, {
                clipPath: "polygon(0 0 , 0 100% , 100% 100% , 100% 0)",
                duration: 1.8
            }).from(".img-box .designer p", {
                x: 40,
                duration: 0.6,
                opacity: 0,
            }, "<+1").from(".img-box .designer img", {
                x: 40,
                duration: 0.6,
                opacity: 0,
            }, "<+0.3").from(".para-box .title span", {
                x: 80,
                duration: 0.6,
                stagger: 0.03,
                opacity: 0,
            }, "<+0.5").from(".para-box .para ", {
                x: 80,
                duration: 0.6,
                opacity: 0,
            }, "<+0.3")
        })
        return () => ctx.revert()
    }, [])
    return (
        <>
            <section className="designTeam" ref={animateRef}>
                <Routes>
                    <Route path="/architecturalDesigner" element={<ArchitecturalDesigner />}></Route>
                    <Route path="/postylateDesigner" element={<PostylateDesigner height={"87%"} right={"2vw"} />}></Route>
                    <Route path="/lightingDesigner" element={<LightingDesigner right={"14vw"} />}></Route>
                    <Route path="/lanscapeDesigner" element={<LanscapeDesigner right={"14vw"} />}></Route>
                </Routes>

                <img src={sunlandSvg} alt="" />
            </section>
        </>

    )
}


function ArchitecturalDesigner({ height, right }) {
    const para = {
        title: `ARCHITECTURAL DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `廖錦盈建築師事務所`,
                paraInner2: `廖錦盈`,
                paraInner3: `建築師`
            },
            para2: `三十餘年來榮獲103年度、104年度北台灣10大建築師及\n2018倫敦設計獎的肯定，秉持「關心環境、創新建築」的\n設計理念，將建築賦予生命、將空間賦予生機，更致力於\n建築與環境之配合，提升建築品質，以期創造出和諧的都\n市空間與環境。\nCLASSY HOME建案以都市景觀融入⾃然環境作為出發點，\n沿街步道式開放空間及廣場式開放空間，並且塑造雙排行\n道樹的林蔭步道，使空間豐富有質感，提供社區住戶舒適\n宜人的休憩空間。`
        }
    }
    return (
        <>

            <div className="para-box">
                <ParaBox title={para.title} para={para.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"} />
            </div>
            <div className="img-box">
                <img src={svg[0]} />
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[0].default} />
                </div>
                <div className="designer">
                    <p>建築設計師</p>
                    <img src={svg[1].default} />
                </div>
            </div>
        </>

    )
}

function PostylateDesigner({ height, right }) {
    const para = {
        title: `POSTULATE DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `雲鼎設計`,
                paraInner2: `陳柏壽`,
                paraInner3: `設計師`
            },
            para2: `自許能隨時代脈動，成為空間整合設計之專業組織團隊，並\n秉持誠信、創新、貼心之工作理念。\nCLASSY HOME建案是都市中難得的完整街廓，在建築師與\n景觀設計師的共同激盪下設計創造出了都市秘境森林，本案\n的公設室內設計便是建築與景觀中間穿針引線的中介空間。`
        }
    }
    return (
        <>

            <div className="para-box">
                <ParaBox title={para.title} para={para.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"} />
            </div>
            <div className="img-box">
                <img src={svg[0]} />
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[1].default} />
                </div>
                <div className="designer">
                    <p>建築設計師</p>
                    <img src={svg[2].default} />
                </div>
            </div>
        </>

    )
}

function LightingDesigner({ height, right }) {
    const para = {
        title: `LIGHTING DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `日大照明`,
                paraInner2: `張文貴`,
                paraInner3: `設計總監`
            },
            para2: `日大照明符合建築精神語彙的燈光，滿足對光的功能需求。\n能源環保， 與相關廠商間的協力創作將燈具融入建築中。\nCLASSY HOME建案選擇高演色性光源與間接照明來詮釋，\n設置不斷光連續線燈，營造出夜間地標建築宏偉輪廓。`
        }
    }
    return (
        <>

            <div className="para-box">
                <ParaBox title={para.title} para={para.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"} />
            </div>
            <div className="img-box">
                <img src={svg[0]} />
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[2].default} />
                </div>
                <div className="designer">
                    <p>建築設計師</p>
                    <img src={svg[3].default} />
                </div>
            </div>
        </>

    )
}

function LanscapeDesigner({ height, right }) {
    const para = {
        title: `LANDSCAPE DESIGN\nDESIGN CONCEPT`,
        paragraph: {
            para1: {
                paraInner1: `六國景觀`,
                paraInner2: `蘇瑞泉`,
                paraInner3: `董事長`
            },
            para2: `六國景觀涵蓋都市設計及環境景觀業務。擁有一批年輕化、\n知識化、專業化的菁英團隊。營業30餘年，拿下過無數的獎\n項，成為台灣豪宅的一把推手，以目前台灣景觀業界中，論\n規模、專業水準及業績均為上乘之選。\nCLASSY HOME建案為營造優質都市空間及舒適居住環境，\n臨路既有人行道規劃2M綠化空間，創造多條寬闊的林蔭帶\n狀空間。社區造型獨特的會所搭配植栽景觀，儼然成為林口\n區的打卡亮點，經過這片多層次的都市森林可以讓人們跳脫\n嘈雜擁擠的生活，感受到更多綠意盎然生命力。`
        }
    }
    return (
        <>

            <div className="para-box">
                <ParaBox title={para.title} para={para.paragraph} linePosition={{ top: "-1vw" }} mb={"0.5vw"} />
            </div>
            <div className="img-box">
                <img src={svg[0]} />
                <div className="imgBox" style={{ height: height, right: right }}>
                    <img src={webp[3].default} />
                </div>
                <div className="designer">
                    <p>建築設計師</p>
                    <img src={svg[4].default} />
                </div>
            </div>
        </>

    )
}

function ParaBox({ title, para, linePosition, mb }) {
    let newArr = spliText(title);
    return (
        <div className="paraBox">
            <div className="title">
                <h2 style={{ whiteSpace: "pre-wrap" }}>{newArr.map((item, i) => {
                    if (item != "\n") {
                        return <span key={i} style={{ display: "inline-block" }}>{item}</span>
                    } else {
                        return "\n"
                    }
                })}</h2>
                <div className="line" style={linePosition}></div>
            </div>
            <div className="para">
                <p style={{ whiteSpace: "pre-wrap", marginBottom: mb }}>{para.para1.paraInner1}<span>{para.para1.paraInner2}</span>{para.para1.paraInner3}</p>
                <p style={{ whiteSpace: "pre-wrap" }}>{para.para2}</p>
            </div>
        </div>
    )
}