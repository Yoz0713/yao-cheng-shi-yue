import React from 'react';

import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
const requireSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);



function Headers({ reduxState }) {
    const location = useLocation();

    return (
        <div className="header">
            <Link to={"/"}>
                <img src={svg[0].default} style={{ opacity: location.pathname == "/lifefunction" ? "0" : reduxState == 0 ? "0" : "1", transition: "0.5s" }} />
            </Link>


        </div>
    )
}

export default connect((state) => {
    return {
        reduxState: state.slideReducer.slide
    }

}, null)(Headers)