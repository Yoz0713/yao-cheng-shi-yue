import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { SectionNav } from './secondPage'
import gsap from 'gsap';
import { connect } from 'react-redux';
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
function FirstPage({ reduxState }) {
    const animateRef = useRef(null)
    const [animation, setAnimation] = useState(false);
    const title = {
        en: "PRIME LOCATION",
        ch: {
            left: "精華地段",
            right: "關鍵一棧"
        }
    }
    const list = [{
        id: 1,
        ch: "國際大園",
        en: "TAOYUAN INTERNATIONAL"
    }, {
        id: 2,
        ch: "重大建設",
        en: "MAJOR CONSTRUCTION"
    }, {
        id: 3,
        ch: "展望大境",
        en: "PROSPECTING THE FUTURE"
    }, {
        id: 4,
        ch: "都市計畫",
        en: "URBAN PLANNING",
        url: "/urban"
    },]
    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            let gg = gsap.timeline({ paused: true })
            gg.from(".left .box img:nth-child(1)", {
                opacity: 0,
                duration: 1.6
            }).from(".left .box img:nth-child(4)", {
                opacity: 0,
                duration: 1.6
            }, "<+0.5").from(".left .box img:nth-child(2)", {
                opacity: 0,
                duration: 1.6
            }, "<+0.5").from(".left .box img:nth-child(3)", {
                opacity: 0,
                duration: 1.6
            }, "<+0.5")

            if (animation) {
                gg.play()
            }


        }, [animateRef])
        return () => ctx.revert()
    }, [animation])
    const animateStart = async () => {
        await new Promise(resolve => setTimeout(() => {

            resolve()
        }, 400));

        setAnimation(true);
    }

    useEffect(() => {
        if (reduxState === 1) {
            animateStart()
            setAnimation(false)
        }
    }, [reduxState]);

    return (
        <section className='first-page' ref={animateRef} >
            <div className="left">
                <div className="imgBox">
                    <div className="box">
                        <img src={webp[11].default} />
                        <img src={webp[12].default} />
                        <img src={webp[13].default} />
                        <img src={webp[14].default} />
                    </div>
                    <div className="box">
                        <img src={webp[15].default} />
                    </div>
                    <div className="box">
                        <img src={webp[16].default} />
                    </div>
                    <div className="box">
                        <img src={webp[17].default} />
                    </div>

                </div>
            </div>
            <SectionNav list={list} title={title} />
        </section>
    )
}

export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide,
    }

}, null)(FirstPage)