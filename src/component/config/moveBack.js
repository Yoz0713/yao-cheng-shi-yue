import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fullNotActive } from '../redux/action/full'
import { playBannerVideo } from '../redux/action/playVideo'
const MoveBack = ({ z }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname;
    const innerPage = []
    const handleClick = function () {
        dispatch(fullNotActive())
        dispatch(playBannerVideo(true))
        if (innerPage.includes(path)) {
            navigate(-1);
        } else {
            navigate("/");
        }
    }
    return (
        <section className="move-back" onClick={handleClick} style={{ width: "100%", height: "100%", position: "fixed", zIndex: z, left: 0, top: 0, pointerEvents: path == "/" ? "none" : "auto" }}>

        </section>
    )
}
export default MoveBack
