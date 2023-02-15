import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Import animation libary
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
// const require1x = require.context("../../../img/index/1x", false, /^\.\/.*\.png$/);
// const x = require1x.keys().map(require1x);


//Banner組件
export default function Banner() {
    const banner = useRef();
    const [swiperNav, setSwiperNav] = useState(0);
    let count;

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            let gg = gsap.timeline({
                yoyo: true,
                repeat: 1,
                repeatDelay: 3.5,
                ease: 'power3.out',
            })

            gg.fromTo(`${swiperNav == 0 ? ".anim1:nth-child(even)" : swiperNav == 1 ? ".anim2:nth-child(even)" : ".anim3:nth-child(even)"}`, {
                opacity: 1,
            }, {
                opacity: 0,
                duration: 0.8,
                stagger: 0.06,
            }).fromTo(`${swiperNav == 0 ? ".anim1:nth-child(odd)" : swiperNav == 1 ? ".anim2:nth-child(odd)" : ".anim3:nth-child(odd)"}`, {
                opacity: 1,
            }, {
                opacity: 0,
                duration: 0.8,
                stagger: 0.06,
            }, "<+0.3").then(() => {
                setTimeout(() => {
                    if (swiperNav >= 0 && swiperNav < 2) {
                        count = swiperNav
                        count++
                        setSwiperNav(count)
                    } else {
                        setSwiperNav(0)
                    }
                }, 200)

            })
            let gg2 = gsap.timeline({
            })
            gg2.from(".banner > .imgBox img", {
                scale: 1.2,
                duration: 15
            })

            let gg3 = gsap.timeline({
                yoyo: true,
                repeat: 1,
                repeatDelay: 3,
                ease: 'power3.out',
            })

            gg3.from(".title-box img", {
                opacity: 0,
                y: "100%",
                duration: 0.6
            }, "<+1").from(".title-box h3", {

                y: "100%",
                duration: 0.6
            }, "<+0.4")
        }, banner)
        return () => ctx.revert(); // cleanup
    }, [swiperNav]); // <- swiperNav Ref dependency Array so it doesn't re-run on every render!


    return (
        <section className='banner' ref={banner}>
            <Logo swiperNav={swiperNav} />
            <SvgCover />
            <BannerImg swiperNav={swiperNav} />

        </section>

    )
}

function SvgCover() {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1280 738.88"

        >
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M320,184.72L0,369.44V0L320,184.72z"
                className="anim1 anim3"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M640,0v369.44L320,184.72L640,0z"
                className="anim1 anim2 anim3"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M960,184.719v369.44l-320-184.72L960,184.719z"
                className="anim1 anim2 anim3"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M960,184.72L640,369.44V0L960,184.72z"
                className="anim1 anim2 anim3"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M1280,369.439l-320,184.72v-369.44L1280,369.439z"
                className="anim1 anim2"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M1280,0v369.44L960,184.72L1280,0z"
                className="anim1 anim2"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}

                d="M320,554.16L0,738.88V369.44L320,554.16z"

            />
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}
                className="anim3"
                d="M320,184.72v369.44L0,369.44L320,184.72z"

            />
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}
                className="anim3"
                d="M640,369.44v369.44L320,554.16L640,369.44z"

            ></path>
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}
                className="anim3"
                d="M640,369.44L320,554.16V184.72L640,369.44z"

            ></path>
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}
                className="anim3"
                d="M960,554.16L640,738.88V369.44L960,554.16z"

            ></path>
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}
                className="anim2"
                d="M1280,369.44v369.44L960,554.16L1280,369.44z"

            ></path>
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M320,184.721L0,0.001L0.002,0H320V184.721z"
                className="anim1 anim3"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M320,184.721V0h319.998L640,0.001L320,184.721z"
                className="anim1 anim2 anim3"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M640,0.001L640.002,0H960v184.721L640,0.001z"
                className="anim1 anim2"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{
                    fill: "#f7f7f7",
                    stroke: "#f7f7f7",
                    strokeMiterlimit: 10,

                }}
                d="M1279.998,0L1280,0.001l-320,184.72V0H1279.998z"
                className="anim1 anim2"
                transform="matrix(1,0,0,1,0,0)"

            />
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}

                d="M320,554.16v184.72H0L320,554.16z"

            />
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}

                d="M320,554.16l320,184.72H320V554.16z"

            />
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}

                d="M960,554.16v184.72H640L960,554.16z"

            />
            <path
                style={{ fill: "#f7f7f7", stroke: "#f7f7f7", strokeMiterlimit: 10 }}
                d="M960,554.16l320,184.72H960V554.16z"

            />
        </svg>
    )
}

function BannerImg({ swiperNav }) {
    return (
        <div className='imgBox'>
            <img src={webp[0].default} style={{ display: swiperNav == 0 ? "block" : "none" }} />
            <img src={webp[1].default} style={{ display: swiperNav == 1 ? "block" : "none" }} />
            <img src={webp[2].default} style={{ display: swiperNav == 2 ? "block" : "none" }} />
        </div>


    )
}
function Logo({ swiperNav }) {
    const h3 = useRef()
    let [title, setTitle] = useState(`INTERNATIONAL
    
    LAND MARK`)
    let [left, setLeft] = useState("17vw")
    useEffect(() => {
        if (swiperNav == 0) {
            setTitle(`INTERNATIONAL\nLAND MARK`)
            setLeft("17vw")
        } else if (swiperNav == 1) {
            setTitle(`SHOPPING\nFASHION`)
            setLeft("17vw")
        } else {
            setTitle(`ELITE\nGATHERING`)
            setLeft("79vw")
        }
    }, [swiperNav])
    return (
        <div className="logo-wrapper">
            <img src={svg[1].default} />
            <img src={svg[2]} />
            <div className="title-box" style={{ left: left }} >
                <img src={svg[3]} />
                <h3 style={{ whiteSpace: 'pre-wrap', left: left }} ref={h3}>{title}</h3>
            </div>
        </div>
    )
}