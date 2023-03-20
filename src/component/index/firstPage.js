import React from 'react'
import { SectionNav } from './secondPage'
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function FirstPage() {
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
    return (
        <section className='first-page'>
            <div className="left">
                <div className="imgBox">
                    <img src={webp[11].default} />
                    <img src={webp[12].default} />
                    <img src={webp[13].default} />
                    <img src={webp[14].default} />
                </div>
            </div>
            <SectionNav list={list} title={title} />
        </section>
    )
}
