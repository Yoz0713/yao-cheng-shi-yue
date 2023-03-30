import React from 'react'
const requireSvg = require.context("../../../img/market/svg", false, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
export default function Market() {
    return (
        <section className='market'>
            <div className="paraBox">
                <div className="title">
                    <h1>MARKETABILITY</h1>
                    <h3>區域行情</h3>
                </div>
                <div className="para">
                    <p>在整體房價趨勢，以青埔、中路、小檜溪價格最高，房價已穩站5字頭，大竹其次，再來就是草漯與大園客運，目前還維持2字頭，房價相對其他地區親民。<br />大園客運園區位於桃園市交通樞紐，距離桃園國際機場近，商業資源豐富，具發展潛力，在區域內發展將不容小覷。
                    </p>
                </div>
            </div>
            <div className="bg">
                <img src={svg[0].default} />
            </div>
        </section>
    )
}
