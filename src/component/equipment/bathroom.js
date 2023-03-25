import React, { useState } from 'react'
import { EquipmentList, EquipmentVertic, ItemBox, Brand } from './config';
import dirtyDefenceVideo from "../../../video/equipment/sweet-dirty-defence.mp4"
import frontFog from "../../../video/equipment/front-fog.mp4"
const requireWebp = require.context("../../../img/equipment/bathroom/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/equipment/bathroom/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Bathroom() {
    const [equip, setEquip] = useState(0)
    const data = {
        img: {
            bg: webp[0].default
        },
        title: {
            en: "BATHROOM EQUIPMENT",
            ch: "衛浴設備"
        },
        item: [{
            img: [webp[1].default],
            imgStyle: { height: "8vw" },
            para: "單體式馬桶",
        }, {
            img: [webp[2].default],
            imgStyle: { height: "8vw" },
            para: "溫水洗淨便座",
        }, {
            img: [webp[3].default],
            imgStyle: { height: "8vw" },
            para: "龍頭系列",
        }, {
            img: [webp[4].default],
            imgStyle: { height: "8vw" },
            para: "下嵌式臉盆",
        }, {
            img: [webp[5].default],
            imgStyle: { height: "8vw" },
            para: "暖風機系列",
        }],

    };
    const fancyData = [
        {
            top: {
                bg: webp[6].default,
                para: [svg[0], svg[1].default],
                paraStyle: [{ width: "9vw", left: "10vw", top: "9vw" }, { width: "20.5vw", left: "10vw", top: "13vw" }, { width: "20.5vw", right: "8vw", top: "21vw" }],
                video: dirtyDefenceVideo,
            },
            bot: {
                itemBox: [{
                    item: webp[1].default,
                    para: "單體式馬桶"
                }],
                brand: [{
                    img: svg[2],
                    para: [
                        "陶瓷表面採抗污釉技術，超越奈米的超平滑表面，\n清潔更為輕鬆。",
                        "G-MAX瞬間強力沖水技術。",
                        "符合規格之產品即頒發省水標章使用證書。",
                    ],
                    width: "30%",
                    clsName: "toto"
                }, {
                    img: svg[3].default,
                    para: [
                        "超平滑表面，減少容易藏污納垢的陶瓷表面凹凸。",
                        "喜貼心「抗污釉」馬桶擁有出色的耐久性。",
                        "擁有良好的親水性，水流能迅速覆蓋馬桶內壁，\n使沖去污垢更加輕鬆。",
                    ],
                    width: "30%"
                }],
                detail: {
                    img: webp[7].default,

                }

            }
        },
        {
            top: {
                bg: webp[8].default,
                para: [null],
                paraStyle: [null],
                video: frontFog,
            },
            bot: {
                itemBox: [{
                    item: webp[2].default,
                    para: "溫水洗淨便座"
                }, {
                    item: webp[9].default,
                    para: "緩降便座"
                }],
                brand: [{
                    img: svg[2],
                    para: [
                        "自動噴出自來水霧，使馬桶表面濕潤，讓污物不易沾黏。",
                        "溫水洗淨便座的溫熱便座功能，溫度可自由調節。",
                        "通過國家品質認證BSMI，商品安全檢驗合格。",
                    ],
                    width: "32%",
                    clsName: "toto"
                }, {
                    img: svg[2],
                    para: [
                        "緩降便座的緩降結構，落下時安全、安靜。",
                        "人體力學設計，美觀且實用。",
                        "UV材質。",
                    ],
                    width: "25%",
                    clsName: "toto"
                },],

            }
        },
        {
            top: {
                bg: webp[10].default,
                para: [null],
                paraStyle: [null],
            },
            bot: {
                itemBox: [{
                    item: webp[3].default,
                    para: "臉盆用單槍龍頭 (短)"
                }, {
                    item: webp[11].default,
                    para: "淋浴用單槍龍頭"
                }],
                brand: [{
                    img: null,
                    para: [
                        "符合規格之產品即頒發省水標章使用證書。",
                        "符合CNS8088「水龍頭」國家標準之飲水用水龍頭。",
                    ],
                    width: "25%",
                }, {
                    img: svg[2],
                    para: [
                        "淋浴用單槍龍頭。",
                        "符合規格之產品即頒發省水標章使用證書。",
                    ],
                    width: "25%",
                    clsName: "toto"
                },],
            }
        },
        {
            top: {
                bg: webp[12].default,
                para: [null],
                paraStyle: [null],
                video: dirtyDefenceVideo,
            },
            bot: {
                itemBox: [{
                    item: webp[4].default,
                    para: "下嵌式臉盆"
                }],
                brand: [{
                    img: svg[2],
                    para: [
                        "創新研發的陶瓷用藥，超越奈米尺度的超平滑表面，不給污垢\n容納的空隙，讓污垢難以黏附，清潔更輕鬆。",
                    ],
                    width: "35%",
                    clsName: "toto"
                }, {
                    img: svg[3].default,
                    para: [
                        "超平滑表面，減少容易藏污納垢的陶瓷表面凹凸。",
                        "喜貼心「抗污釉」馬桶擁有出色的耐久性。",
                        "擁有良好的親水性，水流能迅速覆蓋馬桶內壁，\n使沖去污垢更加輕鬆。",
                    ],
                    width: "30%",

                },],
                detail: {
                    img: webp[7].default,
                }
            }
        },
        {
            top: {
                bg: webp[13].default,
                para: [null],
                paraStyle: [null],
            },
            bot: {
                itemBox: [{
                    item: webp[5].default,
                    para: "無線遙控浴室暖風機"
                }, {
                    item: webp[14].default,
                    para: "靜音型換氣扇"
                }],
                brand: [{
                    img: svg[4].default,
                    para: [
                        "暖風、乾燥、換氣、遙控。",
                        "陶瓷加熱器。",
                        "單馬達、單扇葉、高效換氣、定時功能。",
                        "採鍍亞鉛防銹鋼板機體。",
                        "五重安全防護設計。"
                    ],
                    width: "25%",
                    clsName: "panasonic"
                }, {
                    img: svg[4].default,
                    para: [
                        "內藏溫度保險絲。",
                        "採鍍亞鉛防銹鋼板機體。",
                        "風倒流防止裝置。",
                        "高性能扇葉，整體提高送風力。",
                        "雙重隔音罩，使生活安靜舒適。"
                    ],
                    width: "25%",
                    clsName: "panasonic"

                },],
            }
        },
    ]

    const handleClick = (i) => {
        setEquip(i)
    }
    const fancyContent = [
        [
            <ItemBox data={fancyData[0].bot.itemBox[0]} />,
            <Brand data={fancyData[0].bot.brand[0]} />,
            <img src={fancyData[0].bot.detail.img} style={{ width: "12vw" }} />,
            <Brand data={fancyData[0].bot.brand[1]} />,
        ],
        [
            <ItemBox data={fancyData[1].bot.itemBox[0]} />,
            <Brand data={fancyData[1].bot.brand[0]} />,
            <ItemBox data={fancyData[1].bot.itemBox[1]} />,
            <Brand data={fancyData[1].bot.brand[1]} />,
        ],
        [
            <ItemBox data={fancyData[2].bot.itemBox[0]} />,
            <Brand data={fancyData[2].bot.brand[0]} />,
            <ItemBox data={fancyData[2].bot.itemBox[1]} />,
            <Brand data={fancyData[2].bot.brand[1]} />,
        ],
        [
            <ItemBox data={fancyData[3].bot.itemBox[0]} />,
            <Brand data={fancyData[3].bot.brand[0]} />,
            <img src={fancyData[3].bot.detail.img} style={{ width: "11vw" }} />,
            <Brand data={fancyData[3].bot.brand[1]} />,
        ],
        [
            <ItemBox data={fancyData[4].bot.itemBox[0]} />,
            <Brand data={fancyData[4].bot.brand[0]} />,
            <ItemBox data={fancyData[4].bot.itemBox[1]} />,
            <Brand data={fancyData[4].bot.brand[1]} />,
        ],
    ]


    return (
        <EquipmentList data={data} handleClick={handleClick}>
            <EquipmentVertic data={fancyData[equip]}>
                {fancyContent[equip].map((item) => {
                    return (
                        item
                    )
                })}
            </EquipmentVertic>
        </EquipmentList>
    )
}
