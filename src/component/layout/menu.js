import React from 'react';
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MenuToggleButton } from '../config/svgCollection';
const requireSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

export default function Menu() {
    const [open, setOpen] = useState(false)
    return (
        <div className="menu" style={{ width: open == false ? "0%" : "100%", transitionDelay: open == true ? "0s" : "0.5s" }}>
            <ToggleButton open={open} setOpen={setOpen} />
            <ToggleButton2 open={open} setOpen={setOpen} />
            <MenuContent open={open} setOpen={setOpen} />
        </div>
    )
}

function MenuContent({ open, setOpen }) {
    const title = [{
        ch: "森聯機構",
        en: "TOP"
    }, {
        ch: "林口之心",
        en: "MIDTOWN"
    }, {
        ch: "建築設計",
        en: "DESIGN"
    }, {
        ch: "百年工藝",
        en: "LANDMARK"
    }, {
        ch: "市場直擊",
        en: "NEWS"
    }]
    const item = [[{
        id: 1,
        ch: "森聯建設",
    }, {
        id: 2,
        ch: "橄欖樹行銷團隊",
    }, {
        id: 3,
        ch: "建築團隊",
    }], [{
        id: 1,
        ch: "都市計畫",
    }, {
        id: 2,
        ch: "生活機能圖",
    }], [{
        id: 1,
        ch: "樓層規劃",
    }], [{
        id: 1,
        ch: "車道坡度",
    }, {
        id: 2,
        ch: "樓高3米4",
    }, {
        id: 3,
        ch: "水泥磅數",
    }, {
        id: 4,
        ch: "樓板養護",
    }, {
        id: 5,
        ch: "輕質隔間",
    }], [{
        id: 1,
        ch: "最新消息",
    }, {
        id: 2,
        ch: "房貸試算",
    }, {
        id: 3,
        ch: "市場個案",
    }]]
    return (
        <div className="menu-content" style={{ clipPath: open == false ? "polygon(100% 0, 100% 100%, 100% 100%, 100% 0)" : "polygon(100% 0, 100% 100%, 0% 100%, 0% 0)" }}>
            <div className="menu-logo">
                <img src={svg[1].default} />
            </div>
            <div className="menu-option">
                <Option title={title[0]} item={item[0]} />
                <Option title={title[1]} item={item[1]} />
                <Option title={title[2]} item={item[2]} />
                <Option title={title[3]} item={item[3]} />
                <Option title={title[4]} item={item[4]} />
            </div>
        </div>
    )
}
function Option({ title, item }) {


    return (
        <div className="option">
            <div className="option-wrapper">
                <div className="title-box" >
                    <h2>{title.en}</h2>
                    <h2>{title.ch}</h2>
                </div>
                <ul className="nav">
                    {item.map((item, i) => {
                        return <li key={item.id} ><img src={svg[2]} /><p >{item.ch}</p></li>
                    })}
                </ul>
            </div>

        </div>
    )
}





function ToggleButton({ open, setOpen }) {
    const [enter, setEnter] = useState(false)
    const [position, setPosition] = useState(null);
    const [svgHeight, setSvgHeight] = useState(null)


    const handleMouseMove = (event) => {
        setPosition(event.clientY);
    };
    const handleClick = () => {
        setOpen(!open)

    }
    const handleMouseEnter = () => {
        setEnter(true)
    }

    return (
        <div className="toggle-button" onMouseMove={handleMouseMove} onClick={handleClick} onMouseLeave={() => setEnter(false)} onMouseEnter={handleMouseEnter} style={{ right: enter == false ? "-3.5vw" : "0", }}>
            <div className="button-container" style={{ transform: `translateY(${position - (svgHeight / 2)}px)` }}>
                <MenuToggleButton open={open} setSvgHeight={setSvgHeight} />
                <div className={`hamburger ${open == true ? "hamburger-active" : null}`}>

                </div>
            </div>

        </div>
    )
}

function ToggleButton2({ open, setOpen }) {
    const [enter, setEnter] = useState(false)
    const [position, setPosition] = useState(null);
    const [svgHeight, setSvgHeight] = useState(null)
    const handleMouseMove = (event) => {
        setPosition(event.clientY);
    };
    const handleClick = () => {
        setOpen(!open)

    }
    const handleMouseEnter = () => {
        setEnter(true)
    }

    return (
        <div className="toggle-button2" onMouseMove={handleMouseMove} onClick={handleClick} onMouseLeave={() => setEnter(false)} onMouseEnter={handleMouseEnter} style={open == false ? { left: enter == false ? "-108vw" : "-105vw" } : { left: enter == false ? "-8vw" : "-5vw" }}>
            <div className="button-container" style={{ transform: `translateY(${position - (svgHeight / 2)}px)` }}>
                <MenuToggleButton open={open} setSvgHeight={setSvgHeight} />
                <div className={`hamburger ${open == true ? "hamburger-active" : null}`}>

                </div>
            </div>

        </div>
    )
}