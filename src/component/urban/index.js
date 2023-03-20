import React, { useLayoutEffect, useRef } from 'react'
import ScaleDrag from "../config/scaleDrag"
import BasicContent from "../config/basicContent"
import gsap from 'gsap';
const requireWebp = require.context("../../../img/urban/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/urban/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Urban() {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".left .box img", {
                y: 30,
                opacity: 0,
                duration: 1,
            })
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='urban' ref={animateRef}>
            <UrbanLeft />
            <UrbanRight />
        </section>
    )
}

function UrbanLeft() {
    return (
        <section className="left">
            <ScaleDrag maxRatio={2} zoomImg1={svg[0]} zoomImg2={svg[1]} init={{ x: "30vw", y: "-22vw" }}>
                <img src={webp[0].default} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <img src={svg[2]} className="anchor-spot" style={{ position: "absolute", left: "3.5vw", bottom: "17.8vw", width: "0.8vw", height: "0.8vw", zIndex: 5 }} />
            </ScaleDrag>
        </section>
    )
}

function UrbanRight() {
    const para = {
        img: null,
        title: `URBAN PLANNING`,
        para1: `大園客運段都市計畫`,
        para2: `全台史上最大開發計劃「桃園航空城」全面啟動，繼青埔高鐵特區成功起飛後，堪稱下一個青埔的「客運特區」亦備受關注。此區匯聚交通便捷脈絡，具備二快、四高、五大道及雙捷，擁有絕佳交通條件，磁吸眾多品牌建商、國際飯店集團等紛紛進駐。`,

    }
    return (
        <section className="right">
            <BasicContent para={para} />
        </section>
    )
}
