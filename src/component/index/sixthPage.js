import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
function SixthPage({ reduxState }) {
    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let gg;
        let ctx;
        if (reduxState === 7) {
            ctx = gsap.context(() => {
                gg = gsap.timeline({ paused: true })
                gg.from(".sixth-page-bg ul li:nth-child(even)", {
                    opacity: 0,
                    y: 35,
                    duration: 1.2
                }).from(".sixth-page-bg ul li:nth-child(odd)", {
                    opacity: 0,
                    y: 35,
                    duration: 1.2,
                    stagger: 0.5
                }, "<+0.5")

            }, [animateRef])
            setTimeout(() => {
                gg.play()
            }, 600);

            return () => {
                ctx.revert()
            }
        }


    }, [reduxState])

    return (
        <section className="sixth-page" ref={animateRef}>
            <SixthPageBg />
            <SixthPagePara />
            <img src={svg[14].default} />
        </section>
    )
}
export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide
    }
}, null)(SixthPage)
function SixthPageBg() {
    return (
        <div className="sixth-page-bg">
            <ul>
                <li>
                    <div className="imgBox">
                        <img src={webp[8].default} />
                    </div>
                    <div className="paraBox">
                        <p>區域行情</p>
                    </div>
                    <Link to="/market"></Link>
                </li>
                <li style={{ zIndex: "2" }}>
                    <div className="imgBox">
                        <img src={webp[9].default} />
                    </div>
                    <div className="paraBox">
                        <p>房市資訊</p>
                    </div>
                    <Link to="/news"></Link>
                </li>
                <li>
                    <div className="imgBox">
                        <img src={webp[10].default} />
                    </div>
                    <div className="paraBox">
                        <p>房貸試算</p>
                    </div>
                    {/* <Link to="/calculation"></Link> */}
                </li>
            </ul>
        </div>

    )
}

function SixthPagePara() {
    return (
        <div className="sixth-page-para">
            <div className="title-box">
                <h3>HOUSE NEWS</h3>
                <p>房市熱點</p>
            </div>
        </div>
    )

}