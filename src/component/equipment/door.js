import React from 'react'
import { EquipmentVertic, ItemBox } from './config';
export default function Door() {
    const requireWebp = require.context("../../../img/equipment/door/webp", false, /^\.\/.*\.webp$/);
    const webp = requireWebp.keys().map(requireWebp);

    const fancyData = {
        top: {
            bg: webp[1].default,
            para: [null],
            paraStyle: [null]
        },
        bot: {
            itemBox: [{
                item: webp[0].default,
                para: "竹水波壓花門",
                height: "20vw",
                margin: "-10vw 0 0 0 "
            }],
        }
    }


    return (
        <div className='fancyBox'>
            <EquipmentVertic data={fancyData}>
                <ItemBox data={fancyData.bot.itemBox[0]} />,
                <img src={webp[2].default} style={{ width: "16vw" }} />,
                <img src={webp[3].default} style={{ width: "45vw" }} />,
            </EquipmentVertic>
        </div>

    )
}
