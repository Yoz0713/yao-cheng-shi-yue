import React, { useState } from 'react'
import BasicMethod from './basicMethod'
import floorConnect1 from "../../../video/method/floor-connect1.mp4";
import floorConnect2 from "../../../video/method/floor-connect2.mp4";
import floorProtect from "../../../video/method/floor-protect.mp4";
import window1 from "../../../video/method/window1.mp4";
import window2 from "../../../video/method/window2.mp4";
import { ParaBox, VideoBox, ImageBox } from './config';
const requireWebp = require.context("../../../img/method/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);

export default function Structure() {
    const [content, setContent] = useState(0);
    const [contentInner, setContentInner] = useState(0);
    const nav = ["鋼筋綁紮", "跳層續接", "穿樑補強", "樓板養護", "開口補強", "鋁窗框阻立"];
    const para = [{
        title: nav[0],
        para: ["結構柱鋼筋綁紮時，除了注意外箍筋要與主筋緊密外，輔助繫筋在綁時·要確實勾住柱主筋築結構體，外箍筋135度彎鉤施作四個，讓箍筋達到圍束的效果，避免地震發生時因應力作用產生的形變狀況，藉以達到絕佳防震、抗震之效果。"]
    }, {
        title: nav[1],
        para: ["採用SA級鋼筋續接器，以跳層續接。", "地上標準層樓高3米，標準層樓層鋼筋採用6米鋼筋跳層續接。"]
    }, {
        title: nav[2],
        para: ["於樑穿管管壁的上下、左右以及45度角處，均特別設置補強鋼筋進行施作，防止開口應力集中產生裂縫，增強樑結構本身的穩固性。"]
    }, {
        title: nav[3],
        para: ["1.樓板灌漿完成後，靜待混凝土初凝期間並適度噴灑澆置水分，避免水灰效應時水分流失太快，因而產生龜裂縫的情形。\n2.當樓板灌漿完成後，持續12小時以上養護以及觀察測試混凝土的收縮品質良好。"]
    }, {
        title: nav[4],
        para: ["施作雙排鋼筋開口補強的方式，在開口端的四處角隅，加設45度斜向補強鋼筋，這樣的施工法可達到開口補強效果減少龜裂滲漏情形，更可強化開口的補強施作效果。"]
    }, {
        title: nav[5],
        para: ["點焊固定優點 :"],
        stage: [
            "1.植筋點焊按裝較穩固，可提高精準度，避免鋁窗於施工中移動。",
            "2.按裝後即使遭受撞擊或是踩踏窗戶，垂直水平均不會變動。",
            "3.一般簡易固定片填縫施作比較不易，因為固定片與結構體連接處，會阻礙泥作填縫，進而影嚮填縫品質。"
        ]
    }]
    const image = [{
        img: [
            [webp[0].default, webp[2].default],
            [webp[1].default, webp[3].default],
        ],
        width: "65%"
    }, {
        img: [
            [webp[4].default, webp[5].default],
        ],
        width: "80%"
    }, {
        img: [
            [webp[6].default],
            [webp[7].default],
            [webp[8].default]
        ],
        width: "65%"
    }]
    const video = [{
        video: [floorConnect1, floorConnect2],
        width: "85%"
    }, {
        video: [floorProtect],
        width: "85%"
    }, {
        video: [window1, window2],
        width: "85%"
    }]

    const right = [
        <ParaBox para={para[0]} content={content} setContent={setContent} image={image[0]} />,
        <ParaBox para={para[1]} content={content} setContent={setContent} video={video[0]} />,
        <ParaBox para={para[2]} content={content} setContent={setContent} image={image[1]} />,
        <ParaBox para={para[3]} content={content} setContent={setContent} video={video[1]} />,
        <ParaBox para={para[4]} content={content} setContent={setContent} video={video[2]} />,
        <ParaBox para={para[5]} content={content} setContent={setContent} image={image[2]} />,

    ]
    const left = [
        <ImageBox image={image[0]} width={image[0].width} content={content} />,
        <VideoBox video={video[0]} width={video[0].width} content={content} contentInner={contentInner} />,
        <ImageBox image={image[1]} width={image[1].width} content={content} />,
        <VideoBox video={video[1]} width={video[1].width} content={content} contentInner={contentInner} />,
        <VideoBox video={video[2]} width={video[2].width} content={content} contentInner={contentInner} />,
        <ImageBox image={image[2]} width={image[2].width} content={content} />,
    ]

    return (
        <BasicMethod left={left} right={right} nav={nav} setContent={setContent} contentInner={contentInner} setContentInner={setContentInner} />

    )
}
