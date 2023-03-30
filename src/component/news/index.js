import React from 'react'
import FancyBox from "../config/fancyBox"
const requireWebp = require.context("../../../img/news/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function News() {
    const news = [
        {
            title: "桃園航空城聯外道路「航城路二段」通車",
            img: webp[1].default
        },
        {
            title: "世紀鋼6.51億元買桃園大園農地為哪樁？房仲分析原因",
            img: webp[2].default
        },
        {
            title: "下一個青埔「大園」蓄勢待發 客運特區加持躍升房市熱點"
        },
        {
            title: "航空城計劃啟動 大園客運特區接棒青埔迎推案潮"
        },
    ]
    return (
        <section className='news'>
            <div className="titleBox">
                <h1>NEWS</h1>
                <h3>新聞資訊</h3>
            </div>
            <div className="news-area">
                {news.map((item, i) => {
                    return (
                        <div className="news-button">
                            <FancyBox text={item.title} key={i}>
                                <div className="newsFancy">
                                    <img src={item.img} />
                                </div>

                            </FancyBox>
                        </div>

                    )
                })}

            </div>
            <div className="bg">
                <img src={webp[0].default} />
            </div>
        </section>
    )
}
