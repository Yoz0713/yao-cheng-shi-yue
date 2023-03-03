import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeVideo } from '../redux/action/videoToggle'

const MoveBack = ({ z }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname
    const handleClick = function () {
        dispatch(closeVideo())
        navigate(-1);
    }
    return (
        <section className="move-back" onClick={handleClick} style={{ width: "100%", height: "100%", position: "fixed", zIndex: z, left: 0, top: 0, pointerEvents: path == "/" ? "none" : "auto" }}>

        </section>
    )
}
export default MoveBack
