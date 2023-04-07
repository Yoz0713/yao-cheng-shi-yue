import React from 'react';

import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { slideChangeAction } from "../redux/action/slideChange"
import { fullNotActive } from '../redux/action/full';
const requireSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);



function Headers({ reduxState }) {
    const location = useLocation();
    const dispatch = useDispatch(null)
    return (
        <div className="header">
            <Link to={"/"} onClick={() => {
                dispatch(fullNotActive())
                dispatch(slideChangeAction(0))
            }}>
                <img src={svg[0].default} style={{ opacity: location.pathname == "/lifefunction" ? "0" : location.pathname == "/" ? "1" : "0", transition: "0.5s" }} />
            </Link>


        </div>
    )
}

export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide
    }

}, null)(Headers)