import React from 'react'
import { EquipmentVertic, ItemBox, Brand } from './config';
import electronLock from "../../../video/equipment/electron-lock.mp4"

const requireWebp = require.context("../../../img/equipment/electron/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
const requireSvg = require.context("../../../img/equipment/electron/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);

export default function Electron() {

    const fancyData = {
        top: {
            bg: webp[1].default,
            para: [svg[1].default],
            paraStyle: [{ width: "20vw", right: "7vw", top: "6vw" }],
            video: electronLock,
            videoStyle: { right: "31vw" }
        },
        bot: {
            itemBox: [{
                item: webp[0].default,
                para: "維夫拉克電子鎖",
            }],
            brand: [{
                img: svg[0],
                para: [
                    "感應式與市售悠遊卡或Mifare格式保全讀卡系統相容。",
                    "鎖匣通過美國UL及ANSI認證。",
                    "門鎖通過台灣CNS60A防火認證。",
                    "當電池電力不足時，會有燈號及響聲提前告知。",
                    "當電池無電力時，可由外部以9V電池暫時供電開門。"
                ],
                width: "35%",
            }],
        }
    }


    return (
        <div className='fancyBox'>
            <EquipmentVertic data={fancyData}>
                <ItemBox data={fancyData.bot.itemBox[0]} />,
                <Brand data={fancyData.bot.brand[0]} />,
                <img src={webp[2].default} style={{ width: "35vw" }} />,
            </EquipmentVertic>
        </div>

    )
}
