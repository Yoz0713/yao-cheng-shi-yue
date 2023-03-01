import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeVideo } from '../redux/action/videoToggle'

const MoveBack = (z) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = function () {
        dispatch(closeVideo())
        navigate(-1);
    }
    return (
        <section className="move-back" onClick={handleClick} style={{ width: "100%", height: "100%", position: "fixed", zIndex: z.z, left: 0, top: 0 }}>

        </section>
    )
}
export default MoveBack
