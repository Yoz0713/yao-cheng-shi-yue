import React from 'react'
import FancyBox from "../config/fancyBox"
const requireWebp = require.context("../../../img/news/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function News() {
    const news = [
        {
            title: "大園耀承璽閱 卡位重劃區起漲點",
            img: webp[1].default
        },
        {
            title: "內政部推補貼 桃園房貸族受惠大",
            img: webp[2].default
        }
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
