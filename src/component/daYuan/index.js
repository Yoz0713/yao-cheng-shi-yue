import React, { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import dayuanVideo1 from "../../../video/dayuan/content1-video.mp4"
import dayuanVideo2 from "../../../video/dayuan/content2-video.mp4"
const requireWebp = require.context("../../../img/dayuan/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function DaYuan() {
    const [slide, setSlide] = useState(0);
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.fromTo(".titleBox", {
                opacity: 0,
                x: -30
            }, {
                x: 0,
                opacity: 1
            }).fromTo(".videoBox", {
                opacity: 0,
            }, {
                opacity: 1
            })
        }, [animateRef])
        return () => ctx.revert()
    }, [slide])
    const fade = (index) => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.to(".titleBox", {
                opacity: 0,
                x: -30
            }).to(".videoBox", {
                opacity: 0,
            }).then(() => {
                setTimeout(() => {
                    setSlide(index)
                }, 250)
            })
        }, [animateRef])
    }
    return (
        <section className='dayuan' ref={animateRef}>
            <div className="content">
                {slide == 0 ? <Content1 /> : slide == 1 ? <Content2 /> : <Content3 />}
            </div>
            <div className="prev" onClick={() => {
                console.log(slide)
                if (slide == 0) {
                    return
                } else {
                    let prevIndex = slide
                    prevIndex--
                    fade(prevIndex)
                }

            }}>

            </div>
            <div className="next" onClick={() => {
                console.log(slide)
                if (slide == 2) {
                    return
                } else {
                    let prevIndex = slide
                    prevIndex = prevIndex + 1
                    console.log(prevIndex)
                    fade(prevIndex)
                }

            }}>

            </div>
        </section>
    )
}

function Content1() {
    return (
        <div className='content1'>
            <div className="titleBox">
                <h1>「新機場，新大園，新未來」</h1>
                <h4>北台灣移居宜居/花園城市新城心。</h4>
            </div>
            <div className="videoBox">
                <video src={dayuanVideo1} autoPlay muted loop></video>
            </div>
        </div>

    )
}
function Content2() {
    return (
        <div className='content2'>
            <div className="titleBox">
                <div className="box">
                    <h1>「全國之最」</h1>
                    <p>「新大園」站在全國最大開發計畫「國際機場特區」首席地位，<br />匯集空陸高速交通、雙語教育、科技產業、重劃區等四大超能量願景。</p>
                </div>
                <div className="box">
                    <h1>「產業密集」</h1>
                    <p>「航空城」61號高速串連臺北港「空海雙港」交通連線六大園區，<br />超過700家近2兆產值。</p>
                </div>
                <div className="box">
                    <h1>「全國趨勢」</h1>
                    <p>國際綠色城市為概念，融入河流、埤塘、綠地等當地特色景觀，<br />未來可期有如亞洲花園城市「新加坡」國際城市發展縮影。</p>
                </div>
            </div>
            <div className="videoBox">
                <img src={webp[0].default} />
                <img src={webp[1].default} />
                <video src={dayuanVideo2} autoPlay muted loop></video>
            </div>
        </div>

    )
}

function Content3() {
    return (
        <div className='content1 content3'>
            <div className="titleBox">
                <h1>「關鍵入主」</h1>
                <h4>千金難買早知道！重劃區贏在起漲點，<br />新大園高速起飛前夕，歡迎即刻登機。</h4>
            </div>
            <div className="videoBox">
                <img src={webp[2].default} />
            </div>
        </div>

    )
}