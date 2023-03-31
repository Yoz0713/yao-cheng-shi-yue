import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import Glow from '../config/glow';
const requireWebp = require.context("../../../img/market/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/market/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Market() {
    const animateRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ repeat: -1 })
            gg.from(".gold-box > div", {
                opacity: 0,
                duration: 0.8,
                stagger: 0.3
            })
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='market' ref={animateRef}>
            <div className="paraBox">
                <div className="title">
                    <h1>MARKETABILITY</h1>
                    <h3>區域行情</h3>
                </div>
                <div className="para">
                    <p>在整體房價趨勢，以青埔、中路、小檜溪價格最高，房價已穩站5字頭，大竹其次，再來就是草漯與大園客運，目前還維持2字頭，房價相對其他地區親民。<br />大園客運園區位於桃園市交通樞紐，距離桃園國際機場近，商業資源豐富，具發展潛力，在區域內發展將不容小覷。
                    </p>
                </div>
            </div>
            <div className="bg">
                <img src={webp[0].default} />
                <div className="gold-box">
                    <img src={svg[0]} className="gold-anchor" />
                    <div className="triangle1">

                    </div>
                    <div className="triangle2">

                    </div>
                    <div className="triangle3">

                    </div>

                </div>

                <img src={svg[1].default} className="white-anchor" />
                <Glow color={"rgb(252, 245, 207)"} number={30} />
            </div>
        </section>
    )
}
