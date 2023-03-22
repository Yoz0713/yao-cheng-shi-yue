import React from 'react';

import { useState } from 'react';
import GreenBg from "../../../img/layout/webp/000-green-bg.webp"
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { fullActive } from '../redux/action/full';
import { slideChange } from '../redux/type';
import { moveToBuildingTeam } from '../redux/action/buildingTeam';
const requireSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireindexSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const indexSvg = requireindexSvg.keys().map(requireindexSvg);
function Menu({ fullActive }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="menu" style={{ width: open == false ? "0%" : "100%", transitionDelay: open == true ? "0s" : "1.5s", pointerEvents: open == true ? "auto" : "none" }}>
            <ToggleButton open={open} setOpen={setOpen} />
            <MenuContent open={open} setOpen={setOpen} fullActive={fullActive} />
        </div>
    )
}

function MenuContent({ open, setOpen, fullActive }) {
    const dispatch = useDispatch()
    const [extend, setExtend] = useState(new Array(6).fill(false))

    const title = [{
        ch: "精華地段",
        en: "LOCATION"
    }, {
        ch: "職人匠心",
        en: "TEAM"
    }, {
        ch: "精品建築",
        en: "BUILDING"
    }, {
        ch: "建築設計",
        en: "MATERIAL"
    }, {
        ch: "嚴選設備",
        en: "EQUIPMENT"
    }, {
        ch: "房市熱點",
        en: "NEWS"
    }]
    const item = [[{
        id: "/1",
        ch: "國際大園",
        slide: 1,
    }, {
        id: "/2",
        ch: "重大建設",
        slide: 1,
    }, {
        id: "/3",
        ch: "展望大境",
        slide: 1,
    }, {
        id: "/urban",
        ch: "都市計畫",
        slide: 1,
    }], [{
        id: "/x",
        ch: "耀承建設",
        slide: 2,
    }, {
        id: "/team/designTeam/building",
        ch: "建築設計",
        slide: 2,
    }, {
        id: "/team/designTeam/postulate",
        ch: "工法設計",
        slide: 2,
    }], [{
        id: "/5",
        ch: "樓層規劃",
        slide: 4,
    }], [{
        id: "/method/structure",
        ch: "結構工法",
        slide: 4,
    }, {
        id: "/method/waterProof",
        ch: "防水工法",
        slide: 4,
    }, {
        id: "/method/sweet",
        ch: "貼心工法",
        slide: 4,
    }], [{
        id: "/9",
        ch: "廚具設備",
        slide: 5,
    }, {
        id: "/10",
        ch: "衛浴設備",
        slide: 5,
    }, {
        id: "/11",
        ch: "電子鎖",
        slide: 5,
    }, {
        id: "/12",
        ch: "氣密窗",
        slide: 5,
    }, {
        id: "/13",
        ch: "鑄鋁門",
        slide: 5,
    }, {
        id: "/14",
        ch: "木地板",
        slide: 5,
    }, {
        id: "/15",
        ch: "淨水器",
        slide: 5,
    }], [{
        id: "/16",
        ch: "區域行情",
        slide: 5,
    }, {
        id: "/17",
        ch: "新聞資訊",
        slide: 5,
    }, {
        id: "/18",
        ch: "房貸試算",
        slide: 5,
    }]]

    return (
        <div className="menu-content" style={{ WebkitMaskPositionX: open == true ? "-260vw" : "  0vw", backgroundImage: `url(${GreenBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="menu-logo">
                <Link to={"/"} onClick={() => {
                    dispatch({ type: slideChange, payload: 0 })
                    fullActive()
                    setOpen(false);

                }}>
                    <img src={indexSvg[1].default} />
                </Link>

            </div>
            <div className="menu-option">
                {[...Array(6)].map((itm, i) => {
                    return (
                        <Option key={i} index={i} setOpen={setOpen} title={title[i]} item={item[i]} extend={extend} setExtend={setExtend} handleClick={() => {
                            let arr;
                            arr = new Array(6).fill(false)
                            if (!extend[i]) {
                                arr[i] = true;
                            }
                            setExtend(arr)
                        }} />
                    )
                })}
            </div>
        </div>
    )
}
export default connect(null, {
    fullActive
})(Menu)
function Option({ title, item, setOpen, extend, handleClick, index }) {
    const location = useLocation()
    const dispatch = useDispatch()


    return (
        <div className="option">
            <div className="option-wrapper">
                <div className="title-box" onClick={() => {
                    handleClick();
                }}>
                    <h2>{title.en}</h2>
                    <h2>{title.ch}</h2>
                </div>
                <ul className="nav" style={{ transform: extend[index] ? "scaleY(1)" : "scaleY(0)" }}>
                    {item.map((item, i) => {
                        return <li key={item.id} onClick={() => {
                            dispatch({ type: slideChange, payload: item.slide })
                            if (item.id == null) {
                                dispatch(moveToBuildingTeam("team3"))
                            }
                            setOpen(false)
                        }} style={{ pointerEvents: item.id == null ? "auto" : location.pathname == item.id ? "none" : "auto" }}>
                            <Link to={`${item.id == null ? "/" : item.id}`}>
                                <div className="square"></div>
                                <p style={{ color: item.id == null ? "#fff" : location.pathname == item.id ? "#ccc" : "#fff" }} >{item.ch}</p>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>

        </div>
    )
}





function ToggleButton({ open, setOpen }) {
    const handleClick = () => {
        setOpen(!open)

    }


    return (
        <div className="toggle-button" onClick={handleClick} style={{ right: 0, pointerEvents: "auto" }}>

            <div className={`hamburger ${open == true ? "hamburger-active" : null}`}>

            </div>


        </div>
    )
}

