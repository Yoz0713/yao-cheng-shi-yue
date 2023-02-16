import React from 'react';
import video from '-!file-loader!../../../video/final_01.mp4'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';


const requireSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function VideoIn() {
    const [skip, setSkip] = useState(false)
    const [fullscrenn, setFullScreen] = useState(false)
    const videoRef = useRef(null)
    useEffect(() => {
        document.body.style.overflow = skip == false ? "hidden" : "hidden"

    }, [skip])
    const handleClick = (() => {
        videoRef.current.play()
        setFullScreen(true)
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
            document.documentElement.msRequestFullscreen();
        }

    })
    return (
        <div className="video-in" style={{ display: skip == true ? "none" : "block" }}>
            <video src={video} playsInline muted loop ref={videoRef}></video>
            <div className="skip" onClick={() => setSkip(true)} style={{ opacity: fullscrenn == false ? "0" : "1" }}>
                <p>SKIP</p>
            </div>
            <div className="full-screen" style={{ display: fullscrenn == true ? "none" : "block" }} onClick={handleClick}>
                <img src={svg[0].default} />
            </div>
        </div>
    )
}