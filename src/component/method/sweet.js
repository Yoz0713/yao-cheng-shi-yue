import React, { useState } from 'react'
import BasicMethod from './basicMethod'
import rainCollect from "../../../video/method/rain-collect.mp4";
import eTag from "../../../video/method/e-tag.mp4";
import airEmission from "../../../video/method/air-emission.mp4";
import ftthCable from "../../../video/method/ftth-cable.mp4";
import { ParaBox, VideoBox } from './config';
const requireWebp = require.context("../../../img/method/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function Sweet() {
    const [content, setContent] = useState(0);
    const [contentInner, setContentInner] = useState(0);
    const nav = ["雨水回收", "ETAG", "當層排放", "FTTH光纖"];
    const para = [{
        title: nav[0],
        para: ["本案採用雨水回收裝置系統，回收水槽、過濾系統、再生水槽，讓雨水從頂樓經由導水管流至地下室之蓄水槽儲備使用；儲存之雨水再經由噴灌系統供應中庭景觀澆灌使用，達到環保省能、資源再利用的功能。"]
    }, {
        title: nav[1],
        para: ["本案採用先進ETAG系統，住戶入住社區後，大樓管理者第一次掃描 條碼 並登錄住戶資料後，系統即讓有登錄住戶順利通行，同時管制未登錄車輛不得進入大樓內，管理室可監控所有進入停車場的住戶或訪客車輛，保障居住者安全。"]
    }, {
        title: nav[2],
        para: ["FTTH全名為Fiber To The Home，為新一代網路架構，主幹採環路(Ring)設計，據有自動環路備援裝置與功能，若因環路中有任一點或一段故障時，將可自動切換環路型態。可避免一次斷線或單點設備故障所造成的中斷或電路不穩之現象。"]
    }, {
        title: nav[3],
        para: ["1.樓板灌漿完成後，靜待混凝土初凝期間並適度噴灑澆置水分，避免水灰效應時水分流失太快，因而產生龜裂縫的情形。\n2.當樓板灌漿完成後，持續12小時以上養護以及觀察測試混凝土的收縮品質良好。"],
        img: webp[9].default
    }]

    const video = [{
        video: [rainCollect],
        width: "95%"
    }, {
        video: [eTag],
        width: "100%"
    }, {
        video: [airEmission],
        width: "85%"
    }, {
        video: [ftthCable],
        width: "85%"
    }]

    const right = [
        <ParaBox para={para[0]} content={content} setContent={setContent} />,
        <ParaBox para={para[1]} content={content} setContent={setContent} />,
        <ParaBox para={para[2]} content={content} setContent={setContent} />,
        <ParaBox para={para[3]} content={content} setContent={setContent} />,
    ]
    const left = [
        <VideoBox video={video[0]} width={video[0].width} content={content} contentInner={contentInner} />,
        <VideoBox video={video[1]} width={video[1].width} content={content} contentInner={contentInner} />,
        <VideoBox video={video[2]} width={video[2].width} content={content} contentInner={contentInner} />,
        <VideoBox video={video[3]} width={video[3].width} content={content} contentInner={contentInner} />,


    ]

    return (
        <BasicMethod left={left} right={right} nav={nav} setContent={setContent} contentInner={contentInner} setContentInner={setContentInner} />

    )
}
