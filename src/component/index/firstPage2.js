import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { SectionNav } from './secondPage'
import gsap from 'gsap';
import { connect } from 'react-redux';

const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);

function FirstPage2({ reduxState }) {
    const animateRef = useRef(null)
    const title = {
        en: "LIFE STYLE",
        ch: {
            left: "幸福版圖",
            right: "生活美學"
        }
    }
    const list = [{
        id: 1,
        ch: "交通動線",
        en: "TRANSPORTATION LINE",
    }, {
        id: 2,
        ch: "生活機能",
        en: "LIVING ABILITY",
        url: "/lifefunction"
    }]
    useLayoutEffect(() => {
        let gg;
        let ctx;
        if (reduxState === 2) {
            ctx = gsap.context(() => {
                gg = gsap.timeline({ paused: true })
                gg.from(".box img", {
                    opacity: 1,
                    y: 0,
                    duration: 1.2
                })

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
        <section className='first-page2' ref={animateRef} >
            <div className="left">
                <div className="imgBox">
                    <div className="box" >
                        <img src={webp[19].default} />
                    </div>
                    <div className="box"  >
                        <img src={webp[18].default} />
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

}, null)(FirstPage2)