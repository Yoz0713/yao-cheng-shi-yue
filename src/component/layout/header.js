import React from 'react';


const requireSvg = require.context("../../../img/layout/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

export default function Headers() {
    return (
        <div className="header">
            <img src={svg[0].default} />
        </div>
    )
}