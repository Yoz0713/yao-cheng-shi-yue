import React from 'react';
import video from '-!file-loader!../../../video/final_01.mp4'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
export default function VideoIn() {
    const [skip, setSkip] = useState(false)
    return (
        <div className="video-in" style={{ display: skip == true ? "none" : "block" }}>
            <video src={video} autoPlay playsInline muted loop></video>
            <div className="skip" onClick={() => setSkip(true)}>
                <p>SKIP</p>
            </div>
        </div>
    )
}