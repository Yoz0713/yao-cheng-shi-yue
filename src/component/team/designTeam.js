import React, { useLayoutEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom';
import SpliText from '../config/splitText';
import gsap from 'gsap';
import { BuildingDesigner, PostulateDesigner } from '../index/secondPage';
import FancyBox from '../config/fancyBox';
const requireWebp = require.context("../../../img/team/design/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/team/design/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);


export const DesignTeam = () => {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()

            gg.from(".designer", {
                opacity: 0,
                x: -35,
                duration: 0.8
            }).from(".right .title span", {
                x: 80,
                duration: 0.6,
                stagger: 0.03,
                opacity: 0,
            }, "<+0.5").from(".right .para", {
                x: 40,
                duration: 0.6,
                opacity: 0,
            }, "<+0.3").from(".right .list", {
                x: 40,
                duration: 0.6,
                opacity: 0,
            }, "<+0.3").from(".right .portfolio .boxInner .thumbBox", {
                x: 30,
                duration: 0.6,
                opacity: 0,
                stagger: 0.3
            }, "<+0.3").from(".right .portfolio .boxInner p", {
                x: 30,
                duration: 0.6,
                opacity: 0,
                stagger: 0.3
            }, "<+0.3")
        })
        return () => ctx.revert()
    }, [])
    return (
        <>
            <section className="designTeam" ref={animateRef}>
                <Routes>
                    <Route path="/building" element={<Architectural />}></Route>
                    <Route path="/postulate" element={<Postulate />}></Route>
                </Routes>
            </section>
        </>

    )
}
function Architectural() {
    const para = {
        title: `ARCHITECTURAL DESIGN`,
        paragraph: {
            para1: {
                paraInner1: `張建鴻建築師事務所`,
                paraInner2: `張建鴻`,
                paraInner3: `建築師`
            },
            para2: `曾入選國內十大建築師殊榮肯定，專業建築經驗豐富，屢獲桃園市府邀約成為建築設計智庫要員。擅長打造城市新地標，象徵新時代的生活標竿。`,
        }
    }
    const list = [{
        id: 1,
        para: "• 張建鴻建築師事務所負責人",
    }, {
        id: 2,
        para: "• 桃園市建築師公會法規委員會委員",
    }, {
        id: 3,
        para: "• 桃園市政府建築技術諮詢小組委員",
    }, {
        id: 4,
        para: "• 桃園市政府新建公營住宅建築設計智庫小組委員",
    }, {
        id: 5,
        para: "• 建築師公會監事",
    }, {
        id: 6,
        para: "• 建築師公會使用安全維護委員會委員",
    }, {
        id: 7,
        para: "• 建築師公會理事/法規委員會副主任委員",
    }]
    return (
        <>
            <BuildingDesigner type={"team2"} />
            <div className="right">
                <ParaBox title={para.title} para={para.paragraph} linePosition={{ bottom: "-1vw" }} mb={"0.5vw"} />
                <Exprience list={list} />
                <div className="portfolio">
                    <div className="boxInner">
                        <FancyBox thumbUrl={webp[0].default}>
                            <img src={webp[3].default} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </FancyBox>
                        <p>逸偉站前ONE</p>
                    </div>
                    <div className="boxInner">
                        <FancyBox thumbUrl={webp[1].default}>
                            <img src={webp[4].default} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </FancyBox>

                        <p>悅佳蔚來</p>
                    </div>
                    <div className="boxInner">
                        <FancyBox thumbUrl={webp[2].default}>
                            <img src={webp[5].default} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </FancyBox>

                        <p>鴻築竹科匯</p>
                    </div>

                </div>
            </div>

        </>
    )
}
function Postulate() {
    const para = {
        title: `LANDSCAPE DESIGN`,
        paragraph: {
            para1: {
                paraInner1: `垣樣規劃設計工程`,
                paraInner2: `侯靜媛`,
                paraInner3: `設計師`
            },
            para2: `逾2200家跨國聯手，開展次世代科技產業。`,
        }
    }
    const list = [{
        id: 1,
        para: "• 2009-2022 垣樣規劃設計工程有限公司 主持人",
    }, {
        id: 2,
        para: "• 2001-2009 廖錦盈建築事務所",
    }, {
        id: 3,
        para: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0巨觀造景工程有限公司",
    }, {
        id: 4,
        para: "• 1999-2001 亞藝綠化工程有限公司",
    }, {
        id: 5,
        para: "• 1998-1999 阿爾法設計公司",
    }, {
        id: 6,
        para: "• 1991-1999 省政府住宅及都市發展局(現營建署第二辦公室)",
    }]
    return (
        <>
            <PostulateDesigner type={"team3"} />
            <div className="right">
                <ParaBox title={para.title} para={para.paragraph} linePosition={{ bottom: "-1vw" }} mb={"0.5vw"} />
                <Exprience list={list} />
                <div className="portfolio">
                    <div className="boxInner">
                        <FancyBox thumbUrl={webp[6].default}>
                            <img src={webp[3].default} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </FancyBox>
                        <p>勤樸天際</p>
                    </div>
                    <div className="boxInner">
                        <FancyBox thumbUrl={webp[7].default}>
                            <img src={webp[4].default} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </FancyBox>
                        <p>杜拜美學</p>
                    </div>
                    <div className="boxInner">
                        <FancyBox thumbUrl={webp[8].default}>
                            <img src={webp[5].default} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </FancyBox>
                        <p>勤樸天悅</p>
                    </div>

                </div>
            </div>
        </>
    )
}


function ParaBox({ title, para, linePosition, mb }) {
    return (
        <div className="paraBox">
            <div className="title">
                <h2 style={{ whiteSpace: "pre-wrap" }}><SpliText text={title} /></h2>
                <div className="line" style={linePosition}></div>
            </div>
            <div className="para">
                <p style={{ whiteSpace: "pre-wrap", marginBottom: mb }}>{para.para1.paraInner1}<span>{para.para1.paraInner2}</span>{para.para1.paraInner3}</p>
                <p style={{ whiteSpace: "pre-wrap" }}>{para.para2}</p>
            </div>
        </div>
    )
}
function Exprience({ list }) {

    return (
        <ul className='list'>
            <li>經歷</li>
            {list.map((item, i) => {
                return (
                    <li key={item.id}>{item.para}</li>
                )
            })}
        </ul>
    )
}