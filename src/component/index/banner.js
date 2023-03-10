import React from 'react';
import { useRef, useEffect } from 'react';
import Video from "../../../video/time-compressed.mp4";
import { connect } from 'react-redux';
const requireWebp = require.context("../../../img/index/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/index/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

// const require1x = require.context("../../../img/index/1x", false, /^\.\/.*\.png$/);
// const x = require1x.keys().map(require1x);


//Banner組件
function Banner({ flag }) {
    const banner = useRef();
    const video = useRef(null);
    useEffect(() => {
        if (flag == true) {
            video.current.play()
        }
    }, [flag]);
    return (
        <section className='banner' ref={banner}>
            <video src={Video} ref={video} muted playsInline loop></video>
            <div className="paraBox">
                <img src={webp[0].default} />
                <img src={svg[1].default} />
                <div className="para">
                    <img src={svg[0].default} />
                </div>
            </div>
            <div className="black"></div>
        </section>

    )
}

export default connect((state) => {
    return {
        flag: state.videoReducer.flag
    }

}, null)(Banner)