import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import purifier from "../../../video/equipment/purifier.mp4";
import { ItemBox } from './config';
const requireWebp = require.context("../../../img/equipment/waterPurifier/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/equipment/waterPurifier/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

export default function WaterPurifier() {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".left", {
                opacity: 0,
                x: -30,
                duration: 1.2
            }).from(".center .imgBox", {
                opacity: 0,
                y: 30,
                stagger: 0.3
            }, "<+0.6").from(".right", {
                opacity: 0,
                y: 30,
            }, "<+1.1")
        }, [animateRef])
        return () => ctx.revert()
    }, [])
    return (
        <section className='water-purifier' ref={animateRef}>
            <div className="left">
                <h6>德國倍世BWT集團於1903年成立，為歐洲第一大水處理設備製造商。</h6>
                <video src={purifier} controls loop autoPlay muted ></video>
                <div className="box">
                    <p>專利濾網，有效濾除固態雜質、鐵銹及泥沙等。</p>
                    <p>過濾範圍可至009.mm(濾網孔徑0.09mm)。</p>
                    <p>保護管路系統、鍋爐、馬達、冷卻水塔、閥件及其他用水設備。</p>
                    <p>有效提昇能源效率及降低設備維護成本。</p>
                    <p>採用航太工程級塑料，可承受16bar(16.8kg/cm2)進水壓力。</p>
                    <p>榮獲DVGW、ISO9001、ISO14001等認證。</p>
                </div>
                <img src={svg[0].default} />
            </div>
            <div className="center">
                <div className="imgBox">
                    <img src={svg[1].default} />
                </div>
                <div className="imgBox">
                    <img src={svg[2].default} />
                </div>
                <div className="imgBox">
                    <img src={svg[3].default} />
                </div>
                <div className="imgBox">
                    <img src={svg[4].default} />
                </div>
            </div>
            <div className="right">
                <ItemBox data={{ item: webp[0].default, para: "BWT前置雜質反洗過濾器", height: "33vw" }} />
                <img src={webp[1].default} className="water" />
                <img src={svg[5]} className="bwt" />
            </div>
        </section>
    )
}
