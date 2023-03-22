import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
export default function BasicMethod({ nav, left, right, setContent, contentInner, setContentInner }) {

    const animateRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(".left", {
                opacity: 0,
                y: -35,
                delay: 0.2
            }).from(".right", {
                opacity: 0,
                y: -35
            }, "<")
        }, [animateRef])
        return () => ctx.revert()
    }, [contentInner])
    const fadeOut = (i) => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.to(".left", {
                opacity: 0,
                y: -35,
            }).to(".right", {
                opacity: 0,
                y: -35
            }, "<").then(() => {
                setContent(0)
                setContentInner(i)
            })
        }, [animateRef])
        return () => ctx.revert()
    }
    return (
        <section className="basicMethod" ref={animateRef}>
            <div className="navBox">
                <ul>
                    {nav.map((item, i) => {
                        return (
                            <li key={i} onClick={() => {
                                fadeOut(i)

                            }} ><p style={{ color: contentInner == i ? "#c0a157" : null, transition: "0.2s" }}>{item}</p></li>
                        )
                    })}
                </ul>
            </div>
            <div className="left">
                {left[contentInner]}
            </div>
            <div className="right">
                {right[contentInner]}
            </div>
        </section>
    )
}









