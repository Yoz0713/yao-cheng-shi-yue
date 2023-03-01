import React from 'react'
import { useNavigate } from 'react-router-dom'

const MoveBack = (z) => {

    const navigate = useNavigate()
    const handleClick = function () {
        navigate(-1)
    }
    return (
        <section className="move-back" onClick={handleClick} style={{ width: "100%", height: "100%", position: "fixed", zIndex: z.z, left: 0, top: 0 }}>

        </section>
    )
}
export default MoveBack
