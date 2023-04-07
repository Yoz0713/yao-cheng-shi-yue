import React from 'react';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { playBannerVideo } from '../redux/action/playVideo';
const requireWebp = require.context("../../../img/layout/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
function FullScreen({ state }) {
    const [skip, setSkip] = useState(false)
    const dispatch = useDispatch()
    const handleClick = (() => {
        dispatch(playBannerVideo(true))
        setSkip(true);

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
        <div className="full-screen" style={{ opacity: state == false ? "0" : skip == true ? "0" : "1", transition: "opacity 0.7s", transitionDelay: "0.3s", pointerEvents: state == false ? "none" : skip == true ? "none" : "auto", }}>
            <div className="trigger" onClick={handleClick}>
                <img src={svg[0].default} />
            </div>
            <div className="green-bg">
                <img src={webp[0].default} />
            </div>
        </div>
    )
}

export default connect((state) => {
    return {
        state: state.fullReducer.flag
    }
}, null)(FullScreen)
