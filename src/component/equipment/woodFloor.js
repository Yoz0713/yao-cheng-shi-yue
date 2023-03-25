import React from 'react'
import { EquipmentVertic, ItemBox, Brand } from './config';
import woodFloor from "../../../video/equipment/floor.mp4"

const requireWebp = require.context("../../../img/equipment/floor/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/equipment/floor/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

export default function WoodFloor() {

    const fancyData = {
        top: {
            bg: webp[0].default,
            para: [svg[0].default],
            paraStyle: [{ width: "25vw", right: "4.2vw", top: "4vw" }],
            video: woodFloor,
            videoStyle: { width: "29vw", height: "17vw", right: "4.1vw", top: "3.3vw" }
        },
        bot: {
            itemBox: [{
                item: svg[1],
                para: "太格德國木地板",
                height: "2vw",
                margin: "0 5vw 2vw 0"
            }],
            brand: [{
                img: [null],
                para: [
                    "表⾯氧化鋁處理，使地板耐⽤如新。",
                    "採用德國橡膠隔⾳墊。",
                    "歐洲E1甲醛標準認證標準健康綠建材。",
                    "耐磨表面，氧化鋁礦物材質，不易刮傷且持久美觀。",
                    "3D立體浮雕耐磨層，提供好的止滑性。",
                    "大自然原始材料皆為光材料，不會使眼睛疲勞。",
                    "不需拋光上蠟，清潔保養容易。",
                    "專利超智慧雙鎖扣，使用更穩定。",
                    "多項專利認證。"
                ],
                width: "30%",
            }],
        }
    }


    return (
        <div className='fancyBox'>
            <EquipmentVertic data={fancyData}>
                <div className="wrap">
                    <ItemBox data={fancyData.bot.itemBox[0]} />
                    <img src={webp[1].default} style={{ width: "15vw", margin: "0 auto" }} />
                </div>
                <Brand data={fancyData.bot.brand[0]} />
                <img src={webp[2].default} style={{ width: "40vw" }} />
            </EquipmentVertic>
        </div>

    )
}

