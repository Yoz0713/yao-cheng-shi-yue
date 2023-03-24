
import React, { useRef, useEffect } from 'react'
const requireSvg = require.context("../../../img/method/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export function ImageBox({ image, content, width }) {

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
export function VideoBox({ video, content, width, contentInner }) {
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

export function ParaBox({ para, content, setContent, video = { video: [null], width: null }, image = { img: [null], width: null } }) {

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
    let changeAreaArray = [para.para, para.stage, video.video, image.img]
    changeAreaArray = changeAreaArray.map((item, i) => {

        if (item == undefined) {
            item = []
        }
        let length = item.length

        return length
    })
    const maxLength = Math.max(...changeAreaArray)
    console.log(maxLength)
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
                {para.stage && <div className='stageBox' style={{ paddingLeft: "0.3vw", marginTop: "0.3vw" }}>
                    {para.stage.map((item, i) => {
                        return (
                            <div className="box">
                                <p style={{ color: content == i ? "#c0a157" : "#fff" }}>{item}</p>
                                <div className="arrow" style={{ scale: content == i ? "1" : "0", transition: "scale 0.6s" }}></div>
                            </div>

                        )
                    })}
                </div>}
            </div>
            {para.img ? <div className='imgBox'>
                <img src={para.img} />
            </div> : null}
            {(maxLength >= 2) ?
                <div className="change-para">
                    {content !== 0 &&
                        <div className="back">
                            <img onClick={back} src={svg[1]} />

                        </div>
                    }
                    <div className="next-replay">
                        {content !== maxLength - 1 ?
                            <img onClick={next} src={svg[0]} /> :
                            <img onClick={replay} src={svg[2]} />
                        }
                    </div>
                </div> : null
            }
        </div>
    )
}