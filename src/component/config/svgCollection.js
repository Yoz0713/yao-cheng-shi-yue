import React from 'react';
import { useEffect, useRef, useState } from 'react';



export function HomeSecondPageYaoChengLogo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 562.23 658.88"
            style={{ display: `${props.type != "team1" ? "none" : "block"}`, transform: "scale(0.65)" }}
        >
            <defs>

                <clipPath id="yaoCheng" clipPathUnits="objectBoundingBox" >
                    <path
                        d="M0.152679 0.351544V0.426062L0.0730764 0.505647L0.208568 0.637761V0.295655L0.366066 0.136468V0.795259L0.420266 0.849459V0.0839566L0.499869 0.000976562L0.58116 0.0822678V0.839291L0.633636 0.795259V0.138139L0.791152 0.293966V0.63945L0.926643 0.505647L0.841957 0.426062V0.34646L0.999455 0.503976L0.736952 0.766462V0.321057L0.686147 0.266857V0.824039L0.52696 0.981555V0.109359L0.499869 0.080579L0.47276 0.109359V0.981555L0.311884 0.815578V0.268564L0.26275 0.31768V0.763084L0.00195312 0.50227L0.152679 0.351544Z"
                        stroke="#E0BD76"
                        strokeMiterlimit={1}
                    />
                </clipPath>
            </defs>
            <g >
                <polygon fill='none' stroke='#e0bd76'
                    points="86.39 199.99 86.39 242.35 41.14 287.59 118.16 362.69 118.16 168.22 207.69 77.73 207.69 452.22 238.5 483.03 238.5 47.88 283.75 .71 329.96 46.92 329.96 477.25 359.79 452.22 359.79 78.68 449.33 167.26 449.33 363.65 526.35 287.59 478.21 242.35 478.21 197.1 567.74 286.64 418.52 435.85 418.52 182.66 389.64 151.85 389.64 468.58 299.15 558.12 299.15 62.32 283.75 45.96 268.34 62.32 268.34 558.12 176.89 463.77 176.89 152.82 148.96 180.74 148.96 433.93 .71 285.67 86.39 199.99"
                ></polygon>
            </g>
        </svg>
    )
}

export function MenuToggleButton({ open, setSvgHeight }) {
    const menuButton = useRef(null)
    useEffect(() => {

        setSvgHeight(menuButton.current.clientHeight)
    }, [])
    return (
        <svg id="_圖層_2" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.99 431.79" ref={menuButton}>

            <g id="menu" >
                <path d="M44.99,0s-.05,431.79-.05,431.79c-8.49-26.71-15.97-53.79-22.85-80.96C9.65,301.7-4.87,249.16,1.59,198.01c2.29-18.13,6.12-36.1,9.87-53.96C20.6,100.42,30.99,57.06,41.6,13.78c1.13-4.59,2.26-9.18,3.39-13.78Z" fill={open == false ? '#c3a457' : "#fff"} />
            </g>
        </svg>
    )
}

export function HomeThirdPageCover() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1234 1823.82"
        >
            <defs>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n      .third-page-1 {\n        clip-path: url(#third-clippath);\n      }\n\n     "
                    }}
                />
                <clipPath id="third-clippath">
                    <polygon
                        fill='#f7f7f7'
                        className="third-page-2"
                        points="1161.5 546.6 821.99 362.78 72.61 724.06 72.61 1272.39 659.13 1411.73 1161.5 1152.76 1161.5 546.6"
                    />
                </clipPath>
            </defs>
            <g >
                <g>
                    <g className="third-page-1">
                        <g className='home-third-clip'>

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 790 1057.65 949.31 1222.29 869.65 1057.65 790"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 949 1057.65 1108.31 1222.29 1028.66 1057.65 949"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 1108 1057.65 1267.31 1222.29 1187.66 1057.65 1108"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 949.15 1222.29 1028.81 1222.29 869.5 1057.65 949.15"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1222.29 1187.81 1222.29 1028.5 1057.65 1108.16 1222.29 1187.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1222.29 1346.82 1222.29 1187.51 1057.65 1267.16 1222.29 1346.82"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 1186.81 893.25 1346.12 1057.89 1266.47 893.25 1186.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 1345.82 893.25 1505.13 1057.89 1425.47 893.25 1345.82"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.89 1425.62 1057.89 1266.32 893.25 1345.97 1057.89 1425.62"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 709.8 893.25 869.11 1057.89 789.46 893.25 709.8"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 868.81 893.25 1028.12 1057.89 948.46 893.25 868.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 1027.81 893.25 1187.12 1057.89 1107.47 893.25 1027.81"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 868.96 1057.89 948.62 1057.89 789.31 893.25 868.96"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.89 1107.62 1057.89 948.31 893.25 1027.96 1057.89 1107.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.89 1266.62 1057.89 1107.31 893.25 1186.97 1057.89 1266.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 1107.62 728.85 1266.93 893.49 1187.28 728.85 1107.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 1266.63 728.85 1425.94 893.49 1346.28 728.85 1266.63"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1346.43 893.49 1187.12 728.85 1266.78 893.49 1346.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1505.44 893.49 1346.13 728.85 1425.78 893.49 1505.44"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1664.44 893.49 1505.13 728.85 1584.79 893.49 1664.44"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 630.61 728.85 789.92 893.49 710.27 728.85 630.61"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 789.62 728.85 948.93 893.49 869.27 728.85 789.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 948.62 728.85 1107.93 893.49 1028.27 728.85 948.62"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 789.77 893.49 869.42 893.49 710.12 728.85 789.77"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1028.43 893.49 869.12 728.85 948.77 893.49 1028.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.49 1187.43 893.49 1028.12 728.85 1107.78 893.49 1187.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 396.75 729.1 476.4 729.1 317.09 564.46 396.75"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 632.59 1057.65 791.9 1222.29 712.24 1057.65 632.59"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 791.74 1222.29 871.4 1222.29 712.09 1057.65 791.74"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 552.39 893.25 711.7 1057.89 632.05 893.25 552.39"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 711.55 1057.89 791.2 1057.89 631.9 893.25 711.55"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 473.2 728.85 632.51 893.49 552.86 728.85 473.2"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 632.36 893.49 712.01 893.49 552.7 728.85 632.36"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 393.01 564.46 552.32 729.1 472.66 564.46 393.01"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 552.17 729.1 631.82 729.1 472.51 564.46 552.17"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 473.98 564.7 553.63 564.7 394.32 400.06 473.98"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 477.17 1057.65 636.48 1222.29 556.82 1057.65 477.17"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="1057.65 636.33 1222.29 715.98 1222.29 556.67 1057.65 636.33"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 396.98 893.25 556.29 1057.89 476.63 893.25 396.98"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="893.25 556.13 1057.89 635.79 1057.89 476.48 893.25 556.13"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 317.79 728.85 477.09 893.49 397.44 728.85 317.79"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="728.85 476.94 893.49 556.6 893.49 397.29 728.85 476.94"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 1027.43 564.46 1186.74 729.1 1107.08 564.46 1027.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 1186.43 564.46 1345.74 729.1 1266.09 564.46 1186.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 1345.44 564.46 1504.75 729.1 1425.09 564.46 1345.44"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1266.24 729.1 1106.93 564.46 1186.59 729.1 1266.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1425.24 729.1 1265.93 564.46 1345.59 729.1 1425.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1584.25 729.1 1424.94 564.46 1504.59 729.1 1584.25"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 550.42 564.46 709.73 729.1 630.07 564.46 550.42"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 709.42 564.46 868.73 729.1 789.08 564.46 709.42"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 868.43 564.46 1027.74 729.1 948.08 564.46 868.43"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 709.58 729.1 789.23 729.1 629.92 564.46 709.58"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 948.23 729.1 788.93 564.46 868.58 729.1 948.23"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="729.1 1107.24 729.1 947.93 564.46 1027.58 729.1 1107.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 949.24 400.06 1108.55 564.7 1028.9 400.06 949.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 1108.24 400.06 1267.55 564.7 1187.9 400.06 1108.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 1267.25 400.06 1426.56 564.7 1346.9 400.06 1267.25"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1188.05 564.7 1028.74 400.06 1108.4 564.7 1188.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1347.05 564.7 1187.75 400.06 1267.4 564.7 1347.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1506.06 564.7 1346.75 400.06 1426.4 564.7 1506.06"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 472.23 400.06 631.54 564.7 551.89 400.06 472.23"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 631.23 400.06 790.54 564.7 710.89 400.06 631.23"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 790.24 400.06 949.55 564.7 869.89 400.06 790.24"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.06 631.39 564.7 711.04 564.7 551.73 400.06 631.39"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 870.05 564.7 710.74 400.06 790.39 564.7 870.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.7 1029.05 564.7 869.74 400.06 949.39 564.7 1029.05"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 869.03 235.66 1028.34 400.3 948.68 235.66 869.03"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 1028.03 235.66 1187.34 400.3 1107.69 235.66 1028.03"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 1187.04 235.66 1346.34 400.3 1266.69 235.66 1187.04"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 1107.84 400.3 948.53 235.66 1028.19 400.3 1107.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 1266.84 400.3 1107.53 235.66 1187.19 400.3 1266.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 1425.85 400.3 1266.54 235.66 1346.19 400.3 1425.85"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 551.02 235.66 710.33 400.3 630.68 235.66 551.02"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 710.03 235.66 869.33 400.3 789.68 235.66 710.03"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.66 551.18 400.3 630.83 400.3 471.52 235.66 551.18"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 789.83 400.3 630.52 235.66 710.18 400.3 789.83"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="400.3 948.84 400.3 789.53 235.66 869.18 400.3 948.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 789.84 71.27 949.15 235.9 869.49 71.27 789.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 948.84 71.27 1108.15 235.9 1028.5 71.27 948.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 1107.84 71.27 1267.15 235.9 1187.5 71.27 1107.84"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 1028.65 235.9 869.34 71.27 948.99 235.9 1028.65"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 1187.65 235.9 1028.34 71.27 1108 235.9 1187.65"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 1346.65 235.9 1187.35 71.27 1267 235.9 1346.65"
                            />

                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="71.27 630.83 71.27 790.14 235.9 710.49 71.27 630.83"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="564.46 237.59 564.46 396.9 729.1 317.25 564.46 237.59"
                            />


                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 710.64 235.9 551.33 71.27 630.99 235.9 710.64"
                            />
                            <polygon
                                fill="#f7f7f7"
                                stroke="#f7f7f7"
                                className="third-page-3"
                                points="235.9 869.65 235.9 710.34 71.27 789.99 235.9 869.65"
                            />
                        </g>
                    </g>
                    <path
                        fill='#f7f7f7'
                        className="third-page-3"
                        d="M0,351.29V1425.29H1234V351.29H0Zm1154,798.88l-495.5,255.43L80,1268.16V727.32L819.13,370.98l334.87,181.31v597.88Z"
                    />
                </g>
            </g>
        </svg>
    )
}

