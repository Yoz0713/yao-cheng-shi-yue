import React, { useState, useRef, useLayoutEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Floor from './floor';
import { useDispatch, useSelector } from 'react-redux';
import { moveToFloor } from "../redux/action/productFloorNav"
import gsap from 'gsap';
const requireWebp = require.context("../../../img/product/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/product/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Product() {
    const animateRef = useRef(null)


    return (
        <>

            <section className='product' ref={animateRef}>
                <Routes>
                    <Route path="/" element={<ProductExterior />} />
                    <Route path="/floor" element={<Floor />} />
                </Routes>
                <FloorNav />
            </section>
        </>

    )
}

function ProductExterior() {
    const [day, setDay] = useState("sun");

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         let gg = gsap.timeline()
    //         gg.to(`.bg`, {
    //             opacity: 1,
    //             duration: 1.2,
    //         })
    //     }, [animateRef])
    //     return () => ctx.revert()
    // }, [])
    // const fade = (target) => {
    //     let ctx = gsap.context(() => {
    //         let gg = gsap.timeline()
    //         gg.to(`.bg`, {
    //             opacity: 0,
    //             duration: 0.3
    //         }).then(() => {
    //             setDay(target)

    //         })
    //     }, [animateRef])
    // }
    return (
        <div className="product-exterior" >
            {day == "sun" ? <img src={webp[0].default} className="bg" /> : <img src={webp[0].default} className="bg" />}
            <div className="dayNight">
                <img src={svg[0]} onClick={() => {
                    setDay("sun")
                }} style={{ pointerEvents: day !== "sun" ? "auto" : "none" }} />
                <img src={svg[1]} onClick={() => {
                    setDay("night")
                }} style={{ pointerEvents: day !== "night" ? "auto" : "none" }} />
            </div>
        </div>
    )
}

function FloorNav() {
    const dispatch = useDispatch(null)
    const floorState = useSelector(state => state.floorReducer.floor);
    const location = useLocation();
    const [isAnimating, setIsanimating] = useState(false)
    const data = [{
        floor: "b3",
        type: "b3"
    }, {
        floor: "b2",
        type: "b2"
    }, {
        floor: "b1",
        type: "b1"
    }, {
        floor: "1F",
        type: "1"
    }, {
        floor: "2F",
        type: "2"
    }, {
        floor: "3F",
        type: "3"
    }, {
        floor: "4F",
        type: "4,5,7,8,10,11,13"
    }, {
        floor: "5F",
        type: "4,5,7,8,10,11,13"
    }, {
        floor: "6F",
        type: "6,9,12"
    }, {
        floor: "7F",
        type: "4,5,7,8,10,11,13"
    }, {
        floor: "8F",
        type: "4,5,7,8,10,11,13"
    }, {
        floor: "9F",
        type: "6,9,12"
    }, {
        floor: "10F",
        type: "4,5,7,8,10,11,13"
    }, {
        floor: "11F",
        type: "4,5,7,8,10,11,13"
    }, {
        floor: "12F",
        type: "6,9,12"
    }, {
        floor: "13F",
        type: "4,5,7,8,10,11,13"
    }, {
        floor: "14F",
        type: "14"
    }]

    const fade = (target) => {

        let gg = gsap.timeline()
        gg.to(`.floor .titleBox`, {
            opacity: 0,
            x: -30,
            duration: 0.3
        }).to(`.floor .scaleWrapper`, {
            opacity: 0,
            duration: 0.5,
            overwrite: "true"
        }).then(() => {
            setIsanimating(false)
            dispatch(moveToFloor(target));
        })
    }
    return (
        <div className="floor-nav">
            <div className="nav-area" style={{ pointerEvents: !isAnimating ? "auto" : "none" }}>
                {data.map((item, i) => {
                    return (

                        <Link to="/product/floor" className={`${floorState == item.type ? "clicked" : ""}`} onClick={(e) => {
                            setIsanimating(true)
                            if (location.pathname == "/product/floor") {
                                e.preventDefault(); // 阻止默认行为
                                fade(item.type)
                            } else {
                                dispatch(moveToFloor(item.type));
                                setIsanimating(false)
                            }

                        }}>
                            <p key={i}>{item.floor}</p>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}