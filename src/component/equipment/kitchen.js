import React from 'react'
import { EquipmentList } from './config'
const requireWebp = require.context("../../../img/equipment/kitchen/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/equipment/kitchen/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Kitchen() {
    const data = {
        img: {
            bg: webp[0].default
        },
        title: {
            en: "KITCHEN UTENSILS",
            ch: "廚具設備"
        },
        item: [{
            img: [webp[1].default],
            imgStyle: { width: "13vw" },
            para: "櫻花隱藏式抽油煙機",
        }, {
            img: [webp[2].default],
            imgStyle: { width: "8vw" },
            para: "櫻花落地式烘碗機",
        }, {
            img: [webp[3].default],
            imgStyle: { width: "11.6vw" },
            para: "雙口瓦斯爐",
        }, {
            img: [webp[4].default],
            imgStyle: { width: "9.4vw" },
            para: "高效淨水器",
        }, {
            img: [webp[5].default],
            imgStyle: { width: "17.3vw" },
            para: "不鏽鋼水槽&伸縮龍頭",
        }],
        fancyData: [
            {
                top: {
                    bg: webp[6].default,
                    para: [svg[0].default, svg[1].default, svg[2].default],
                    paraStyle: [{ right: "8vw", top: "5vw" }, { right: "22vw", top: "13vw" }, { right: "8vw", top: "21vw" }]
                },
                bot: {
                    itemBox: [{
                        item: webp[1].default,
                        para: "觸控隱藏式抽油煙機"
                    }],
                    sakura: {
                        para: [
                            "半隱藏式設計，整體廚房線條不受干擾",
                            "觸控式介面，科技時尚感十足",
                            "靜音除味設計，常保廚房空氣清新",
                            "渦輪變頻最強Turbo大吸力，效力強更安靜",
                            "高亮度LED燈泡照明，節能又省電",
                            "使用汽車等級彈簧的下掀強化玻璃擋煙板"
                        ],
                        width: "25%"
                    },
                    detail: {
                        img: webp[7].default,
                        style: {
                            width: "33vw"
                        }
                    }

                }
            }
        ]
    }
    return (
        <EquipmentList data={data} />
    )
}
