import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import ScaleDrag from "../config/scaleDrag"
import gsap from 'gsap';
import { moveToFloor } from "../redux/action/productFloorNav"
import FancyBox from "../config/fancyBox"
const requireWebp = require.context("../../../img/product/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/product/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
function Floor({ floor }) {
    let data;
    const animateRef = useRef(null)
    const dispatch = useDispatch(null)
    if (floor == "1") {
        data = {
            floor: ["1F"],
            style: "single",
            img: webp[1].default
        }
    } else if (floor == "2") {
        data = {
            floor: ["2F"],
            img: webp[2].default,
            style: "second-floor"
        }
    } else if (floor == "3") {
        data = {
            floor: ["3F"],
            img: webp[3].default
        }
    } else if (floor == "4,5,7,8,10,11,13") {
        data = {
            floor: ["4", "5", "7", `\n`, "8", "10", "11", "13"],
            img: webp[4].default
        }
    } else if (floor == "6,9,12") {
        data = {
            floor: [...(floor.split(","))],
            img: webp[5].default
        }
    } else if (floor == "14") {
        data = {
            floor: ["14F"],
            img: webp[6].default
        }
    } else if (floor == "b3") {
        data = {
            floor: ["B3"],
            style: "single",
            img: webp[9].default
        }
    } else if (floor == "b2") {
        data = {
            floor: ["B2"],
            style: "single",
            img: webp[8].default
        }
    } else if (floor == "b1") {
        data = {
            floor: ["B1"],
            style: "single",
            img: webp[7].default
        }
    } else {
        data = null
    }
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let gg = gsap.timeline()
            gg.from(`.titleBox`, {
                opacity: 0,
                x: 0,
                duration: 0.3,
            }).from(`.scaleWrapper`, {
                opacity: 0,
                duration: 0.5,
                overwrite: "true"
            })
        }, [animateRef])
        return () => ctx.revert()
    }, [floor])

    useEffect(() => {
        return () => dispatch(moveToFloor(0))
    }, [])
    return (
        <>
            {data == null ?
                null :
                <section className={`floor ${data.style ? data.style : ""}`} ref={animateRef}>

                    <div className="titleBox">
                        <h2>{data.floor.map((item, i) => {
                            if (data.floor.length >= 2) {

                                if (item == "\n") {
                                    return <br />
                                }
                                return (
                                    <span>{item + "F"}</span>
                                )
                            } else {
                                return (
                                    item
                                )
                            }

                        })}</h2>
                        <h3>全區配置圖</h3>
                    </div>
                    <div className="scaleWrapper">
                        <ScaleDrag maxRatio={2} zoomImg1={require("../../../img/urban/svg/000-plus-button.svg")} zoomImg2={require("../../../img/urban/svg/001-minus-button.svg")}>
                            <img src={data.img} />
                            {!(data.style == "single") ?
                                <div className="dualAnchor">
                                    <div className="a1">
                                        <p>A1</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[10].default} /></div> </FancyBox>}
                                    </div>
                                    <div className="a2">
                                        <p>A2</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[11].default} /></div> </FancyBox>}
                                    </div>
                                    <div className="a3">
                                        <p>A3</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[12].default} /></div> </FancyBox>}
                                    </div>
                                    <div className="a5">
                                        <p>A5</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[13].default} /></div> </FancyBox>}
                                    </div>
                                    <div className="b1">
                                        <p>B1</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[14].default} /></div> </FancyBox>}
                                    </div>
                                    <div className="b2">
                                        <p>B2</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[15].default} /></div> </FancyBox>}
                                    </div>
                                    <div className="b3">
                                        <p>B3</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[16].default} /></div> </FancyBox>}
                                    </div>
                                    <div className="b5">
                                        <p>B5</p>
                                        {floor == "4,5,7,8,10,11,13" && <FancyBox> <div className="home-map"><img src={webp[17].default} /></div> </FancyBox>}
                                    </div>
                                </div>
                                :
                                <div className='singleAnchor'>

                                </div>


                            }
                        </ScaleDrag>
                    </div>

                </section>
            }
        </>


    )
}

export default connect((state) => {
    return {
        floor: state.floorReducer.floor,
    }

}, null)(Floor)
