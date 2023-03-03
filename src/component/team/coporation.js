import React from 'react'
import MoveBack from '../config/moveBack';
import { Routes, Route } from 'react-router-dom';

const requireWebp = require.context("../../../img/team/coporation/sunland/webp", false, /^\.\/.*\.webp$/);
const sunlandWebp = requireWebp.keys().map(requireWebp);

const requireSvg2 = require.context("../../../img/team/coporation/oliv/svg", false, /^\.\/.*\.svg$/);
const olivSvg = requireSvg2.keys().map(requireSvg2);
const requireWebp2 = require.context("../../../img/team/coporation/oliv/webp", false, /^\.\/.*\.webp$/);
const olivWebp = requireWebp2.keys().map(requireWebp2);

export const Coporation = () => {
    return (
        <div className='coporation'>
            <Routes>
                <Route path="/sunland" element={<Sunland />}></Route>
                <Route path="/oliv" element={<Oliv />}></Route>
            </Routes>
        </div>

    )
}

function Sunland() {
    const para = {
        title: `SUNLAND DEVELOPMENT\nDESIGN CONCEPT`,
        paragraph: {
            para1: `森聯機構CLASSY HOME建案，\n2021年公司開始參與規劃，\n與建築設計團隊為使個案產品更加完美，\n我們不斷自生活中尋找新鮮題材融入本案，掌握時代變化，\n洞察趨勢生活及居住者習慣的改變，\n期許讓本社區成為未來客戶享受美好的生活所在。\n這是我們所堅持與嚮往的情境.......`,
            para2: `回歸居住者角度，深度思考建築每一個面向，\n積極與森聯互動參與規劃建議，\n目的是為了讓社區更好，成為客戶最有價值的人生資產。`
        }
    }
    return (
        <>
            <div className="sunland">
                <ImgBox url={sunlandWebp[0].default} />
                <div className="right">
                    <ParaBox title={para.title} para={para.paragraph} linePosition={{ bottom: "-1vw" }} mb={"1.5vw"} />
                    <SunlandNav />

                </div>

            </div>

        </>


    )
}

function SunlandNav() {
    return (
        <div className="nav">
            <ul>
                <li>森聯建設</li>
                <li>歷年業績</li>
                <li>摩天41</li>
            </ul>
        </div>
    )
}

function Oliv() {
    const para = {
        title: `OLIVE TREE\nDESIGN CONCEPT`,
        paragraph: {
            para1: `象徵著公司旺盛的生命力，同心的凝聚力、完美的創造力，\n從扎根開始、茁壯、開發、結果。\n從自身的本質學能開始，深入了解工作領域的每一事物虛心\n的學習，清楚的表達，生活在理性與感性之間自我要求、細\n心探討，堅持做到完美。`,
            para2: `面對問題、重視環節、尊重客戶，秉持著熱忱與服務的精神\n重視每一事物上的表現，如何在點、線、面上，做選擇與要求。`
        }
    }
    return (
        <>
            <div className="oliv">
                <ImgBox url={olivWebp[0].default} />
                <div className="right">
                    <ParaBox title={para.title} para={para.paragraph} linePosition={{ bottom: "-1vw" }} mb={"0vw"} />
                    <div className="slogan">
                        <img src={olivSvg[0]} />
                        <img src={olivSvg[1].default} />
                        <img src={olivSvg[2]} />
                        <img src={olivSvg[3]} />
                    </div>
                </div>

            </div>

        </>
    )


}

//共用
function ImgBox({ url }) {
    return (
        <div className="imgBox">
            <img src={url} />
        </div>
    )
}

function ParaBox({ title, para, linePosition, mb }) {

    return (
        <div className="paraBox">
            <div className="title">
                <h2 style={{ whiteSpace: "pre-wrap" }}>{title}</h2>
                <div className="line" style={linePosition}></div>
            </div>
            <div className="para">
                <p style={{ whiteSpace: "pre-wrap", marginBottom: mb }}>{para.para1}</p>
                <p style={{ whiteSpace: "pre-wrap" }}>{para.para2}</p>
            </div>
        </div>
    )
}
