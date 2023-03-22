import React, { useState, useRef, useEffect } from 'react'
import BasicMethod from './basicMethod'
import floorConnect1 from "../../../video/floor-connect1.mp4";
import floorConnect2 from "../../../video/floor-connect2.mp4";
import floorProtect from "../../../video/floor-protect.mp4";
import window1 from "../../../video/window1.mp4";
import window2 from "../../../video/window2.mp4";
const requireSvg = require.context("../../../img/method/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
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
        para: ["點焊固定優點 :\n1.植筋點焊按裝較穩固，可提高精準度，避免鋁窗於施工中移動。\n2.按裝後即使遭受撞擊或是踩踏窗戶，垂直水平均不會變動。\n3.一般簡易固定片填縫施作比較不易，因為固定片與結構體連接處，會阻礙泥作填縫，進而影嚮填縫品質。"]
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
            [webp[7].default]
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
function ImageBox({ image, content, width }) {

    return (
        <div className="imageBox">
            {image.img.map((item, index1) => {
                return (
                    <div className={`imgBox `} key={index1} style={{ opacity: content == index1 ? "1" : "0", width: width }}>
                        {item.map((item, index2) => {
                            return (
                                <img key={index2} src={item} />
                            )
                        })}
                    </div>
                )

            })}
        </div>
    )
}
function VideoBox({ video, content, width, contentInner }) {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();

    }, [content, contentInner]);
    return (
        <div className="imageBox">
            {video.video.map((item, index1) => {
                return (
                    <div className={`imgBox imgBox${index1 + 1}`} key={index1} style={{ opacity: content == index1 ? "1" : "0", width: width }}>
                        <video src={item} ref={content == index1 ? videoRef : null} muted playsInline />
                    </div>
                )

            })}
        </div>
    )
}

function ParaBox({ para, content, setContent, video = { video: [null], width: null }, image = { img: [null], width: null } }) {

    const next = () => {
        let index = content
        setContent(++index)
    }
    const replay = () => {
        setContent(0)
    }
    const back = () => {
        let index = content
        setContent(--index)
    }
    return (
        <div className="paraBox">
            <div className="method-name">
                <h2>STRUCTURAL METHOD</h2>
            </div>
            <div className="title">
                <h4>{para.title}</h4>
            </div>
            <div className="para">
                {para.para.length != 1 ?
                    <p> {para.para[content]}</p> :
                    <p> {para.para[0]}</p>
                }


            </div>
            {(para.para.length >= 2) ?
                <div className="change-para">
                    {content !== 0 &&
                        <div className="back">
                            <img onClick={back} src={svg[1]} />

                        </div>
                    }
                    <div className="next-replay">
                        {content !== para.para.length - 1 ?
                            <img onClick={next} src={svg[0]} /> :
                            <img onClick={replay} src={svg[2]} />
                        }
                    </div>
                </div> : video.video.length >= 2 ?
                    <div className="change-para">
                        {content !== 0 &&
                            <div className="back">
                                <img onClick={back} src={svg[1]} />

                            </div>
                        }
                        <div className="next-replay">
                            {content !== video.video.length - 1 ?
                                <img onClick={next} src={svg[0]} /> :
                                <img onClick={replay} src={svg[2]} />
                            }
                        </div>
                    </div> : image.img.length >= 2 ?
                        <div className="change-para">
                            {content !== 0 &&
                                <div className="back">
                                    <img onClick={back} src={svg[1]} />

                                </div>
                            }
                            <div className="next-replay">
                                {content !== image.img.length - 1 ?
                                    <img onClick={next} src={svg[0]} /> :
                                    <img onClick={replay} src={svg[2]} />
                                }
                            </div>
                        </div> : null
            }
        </div>
    )
}