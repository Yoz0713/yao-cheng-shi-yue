import React, { useState } from 'react'
import BasicMethod from './basicMethod'
import bathProof1 from "../../../video/method/bath-proof1.mp4";
import bathProof2 from "../../../video/method/bath-proof2.mp4";
import bathProof3 from "../../../video/method/bath-proof3.mp4";
import bathProof4 from "../../../video/method/bath-proof4.mp4";
import bathProof5 from "../../../video/method/bath-proof5.mp4";
import bathProof6 from "../../../video/method/bath-proof6.mp4";
import topFloorProof1 from "../../../video/method/top-floor-proof1.mp4";
import topFloorProof2 from "../../../video/method/top-floor-proof2.mp4";
import topFloorProof3 from "../../../video/method/top-floor-proof3.mp4";
import topFloorProof4 from "../../../video/method/top-floor-proof4.mp4";
import topFloorProof5 from "../../../video/method/top-floor-proof5.mp4";
import topFloorProof6 from "../../../video/method/top-floor-proof6.mp4";
import topFloorProof7 from "../../../video/method/top-floor-proof7.mp4";
import { ParaBox, VideoBox, ImageBox } from './config';
const requireWebp = require.context("../../../img/method/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);

export default function WaterProof() {
    const [content, setContent] = useState(0);
    const [contentInner, setContentInner] = useState(0);
    const nav = ["窗框防水", "浴室防水", "頂樓防水"];
    const para = [{
        title: nav[0],
        para: ["窗框開口由於容易產生集力現象，造成角隅龜裂情形，故防水施作需在窗框開口角隅處進行補強，避免窗框開口周邊滲漏水現象。\n施工步驟："],
        stage: [
            "1.各外牆開口先安裝鋁門窗之窗框或其它相關門框；結構體和窗框間表面須用水清洗乾淨，並濕潤混凝土。",
            "2.結構體和窗框間以灌注方式進行崁縫。崁縫施作後，需逐一檢查是否有中空不實，或表面孔隙過大、不平整，再予以修補，以利防水施作。",
            "3.施作複合式防水材及於窗框45度角處張貼抗裂纖維網以增加防  水材料韌性。",
            "4.進行外牆打底項目。",
            "5.進行施作外部裝飾材(例如磁磚或抿石子)，最後再於窗框開口四週施作矽利康。"
        ]
    }, {
        title: nav[1],
        para: ["施工步驟："],
        stage: [
            "1.牆面及地坪於防水施作前，先將混凝土表面雜物清洗乾淨；牆面和地坪交界處，如空隙過大或不平整，以水泥填補平整。",
            "2.牆面及地坪施作以彈性水泥一底二塗防水材。乾區150cm高，濕區220cm高高。",
            "3.於牆面和地坪交角及落水孔四週，以防水材加強塗布，以避免從角隅及管壁邊緣滲水。",
            "4.將排水孔以膠帶暫時封住，放水進行測試3天。",
            "5.進行地坪泥作工程防水材保護層施作。",
            "6.貼上面材、設備安裝完成。"
        ]
    }, {
        title: nav[2],
        para: ["施工步驟："],
        stage: [
            "1.於屋頂地坪和女兒牆交界處如有空隙過大或不平整處，先以水泥填補平整。",
            "2.於地坪和女兒牆交界處以抗裂纖維網及樹脂砂漿補強，以避免從角隅及管壁邊緣滲水。",
            "3.於結構面施作防水材",
            "4.將排水孔以膠帶暫時封住，放水進行測試3天。",
            "5.進行地面壓製地坪保護層。",
            "6.進行牆面及地坪泥做工程。",
            "7.最後貼上面材。"
        ]
    }]
    const image = [{
        img: [
            [webp[10].default],
            [webp[11].default],
            [webp[12].default],
            [webp[13].default],
            [webp[14].default],
        ],
        width: "65%"
    }]
    const video = [{
        video: [bathProof1, bathProof2, bathProof3, bathProof4, bathProof5, bathProof6],
        width: "85%"
    }, {
        video: [topFloorProof1, topFloorProof2, topFloorProof3, topFloorProof4, topFloorProof5, topFloorProof6, topFloorProof7],
        width: "85%"
    }]

    const right = [
        <ParaBox para={para[0]} content={content} setContent={setContent} image={image[0]} />,
        <ParaBox para={para[1]} content={content} setContent={setContent} video={video[0]} />,
        <ParaBox para={para[2]} content={content} setContent={setContent} image={image[1]} />,

    ]
    const left = [
        <ImageBox image={image[0]} width={image[0].width} content={content} />,
        <VideoBox video={video[0]} width={video[0].width} content={content} contentInner={contentInner} />,
        <VideoBox video={video[1]} width={video[1].width} content={content} contentInner={contentInner} />,
    ]

    return (
        <BasicMethod left={left} right={right} nav={nav} setContent={setContent} contentInner={contentInner} setContentInner={setContentInner} />

    )
}
