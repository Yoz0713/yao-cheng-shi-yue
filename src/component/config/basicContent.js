import React, { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import SpliText from './splitText'
export default function BasicContent({ para }) {
    const [text, setText] = useState("para1")
    const animateRef = useRef(null);


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".left", {
                opacity: 0,
                x: -30,
            }).from(".right h2 span", {
                opacity: 0,
                x: 30,
                stagger: 0.03
            }, "<+0.5").from(".right p", {
                opacity: 0,
                x: 30,
                stagger: 0.3
            }, "<+0.3")
        }, [animateRef])
        return () => ctx.revert()
    }, [text])
    return (
        <div className={`basicContent ${para.style ? para.style : ""}`} ref={animateRef}>
            <div className="left">
                <div className="imgBox">
                    {text == "para1" ? <img src={para.img} /> : <img src={para.nav.img} />}

                </div>
            </div>
            <div className="right">
                <div className="titleBox">
                    {text == "para1" ? <h2><SpliText text={para.title} /></h2> : <h2><SpliText text={para.nav.title} /></h2>}
                    <div className="line"></div>
                </div>
                {text == "para1" ?
                    <div className="paraBox">
                        <p>{para.para1}</p>
                        <p>{para.para2}</p>
                    </div>
                    :
                    <div className="paraBox">
                        <p>{para.nav.para1}</p>
                        <p>{para.nav.para2}</p>
                    </div>
                }

                {para.nav ? <Nav para={para.nav} text={text} setText={setText} /> : null}
            </div>
        </div>
    )
}

function Nav({ para, text, setText }) {

    return (
        <ul>
            {para.navText.map((item, i) => {
                return (
                    <li
                        key={item}
                        style={{ color: text == `para${i + 1}` ? "#c2a357" : "#1a1a1a" }}
                        onClick={() => {
                            setText(`para${i + 1}`)
                        }}
                    >
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

//---useage---
// {
//     img: webp[14].default,
//     title: `EXPRESS TRANSPORTATION`,
//     para1: `CITYLINK商場`,
//     para2: `捷運三重站共構百貨商場為新北第一座CITYLINK，預計2024年完工，地上1~2層，面積約1,974坪，潮牌服飾、時尚精品、異國料理美食，就近享受國際好品味。\n複製南港站模式，導入連鎖商店與蔦屋書店。`,
//     nav: {
//         navText: ["CITYLINK商場", "新北都會公園"],
//         img: webp[15].default,
//         title: `EXPRESS TRANSPORTATION`,
//         para1: `新北都會公園`,
//         para2: `全臺灣最大河濱公園424公頃的「大臺北都會公園」（約16個大安森林公園面積）`,
//     }
// }