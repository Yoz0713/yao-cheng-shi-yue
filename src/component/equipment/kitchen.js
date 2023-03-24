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
                    paraStyle: [{ width: "20.5vw", width: "20.5vw", right: "8vw", top: "5vw" }, { width: "20.5vw", right: "22vw", top: "13vw" }, { width: "20.5vw", right: "8vw", top: "21vw" }]
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
            },
            {
                top: {
                    bg: webp[8].default,

                },
                bot: {
                    itemBox: [{
                        item: webp[2].default,
                        para: "櫻花落地式烘碗機"
                    }],
                    sakura: {
                        para: [
                            "雙抽屜作動烘乾，可依碗盤多寡自由選擇三段烘乾殺菌模式",
                            "O3殺菌+PTC熱風循環設計，讓碗盤殺菌烘乾更安心",
                            "大容量雙層收納，不鏽鋼材質內壁及碗架，耐用好清理",
                            "人性化操作介面設計，一鍵操作，簡單易懂好操作",
                            "平整化美形外觀搭配電子式按鍵，提升廚房整體性",
                        ],
                        width: "34%"
                    },
                    detail: {
                        img: webp[9].default,
                        style: {
                            width: "33vw"
                        }
                    }

                }
            },
            {
                top: {
                    bg: webp[10].default,
                    para: [svg[4].default, svg[5]],
                    paraStyle: [{ width: "25.7vw", left: "10vw", top: "10vw" }, { width: "6.2vw", left: "38vw", top: "21vw" }]
                },
                bot: {
                    itemBox: [{
                        item: webp[3].default,
                        para: "二口雙炫火玻璃檯面爐"
                    }],
                    sakura: {
                        para: [
                            "一點靈點火系統，精確點火不必等",
                            "全罩式防漏上湯盤，湯汁不易滴落",
                            "強化玻璃面板，美觀易清理",
                            "鑄鐵爐架搭配，耐用不滑鍋",
                            "全機平整化設計，搭配櫃體更時尚",
                            "熄火安全裝置，杜絕瓦斯外漏風險",
                            "兒童安全開關，防止孩童誤觸"
                        ],
                        width: "50%"
                    },
                    detail: {
                        img: webp[11].default,
                        style: {
                            width: "15vw"
                        }
                    }

                }
            },
            {
                top: {
                    bg: webp[12].default,
                    para: [svg[6].default, svg[7].default, svg[8].default],
                    paraStyle: [{ width: "18vw", right: "7vw", top: "10vw" }, { width: "6.2vw", right: "7vw", top: "18vw" }, { width: "6.2vw", right: "7vw", top: "26vw" }]
                },
                bot: {
                    itemBox: [{
                        item: webp[3].default,
                        para: "二口雙炫火玻璃檯面爐"
                    }],
                    sakura: {
                        para: [
                            "一點靈點火系統，精確點火不必等",
                            "全罩式防漏上湯盤，湯汁不易滴落",
                            "強化玻璃面板，美觀易清理",
                            "鑄鐵爐架搭配，耐用不滑鍋",
                            "全機平整化設計，搭配櫃體更時尚",
                            "熄火安全裝置，杜絕瓦斯外漏風險",
                            "兒童安全開關，防止孩童誤觸"
                        ],
                        width: "50%"
                    },
                    detail: {
                        img: webp[11].default,
                        style: {
                            width: "15vw"
                        }
                    }

                }
            },

        ]
    }
    return (
        <EquipmentList data={data} />
    )
}
