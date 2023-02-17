import React from 'react'


const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function SixthPage() {
    return (
        <section className="sixth-page">
            <SixthPagePara />
        </section>
    )
}


function SixthPagePara() {
    return (
        <div className="sixth-page-para">
            <div className="title-box" >
                <img src={svg[3]} />
                <h3>LATEST<br />NEWS</h3>
            </div>
        </div>
    )

}