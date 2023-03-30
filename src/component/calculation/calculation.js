import React, { useEffect, useRef, useState } from 'react'

const requireWebp = require.context("../../../img/calculation/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function Calculation() {
    return (
        <section className='calculation'>
            <div className="title">
                <h1>試算表</h1>
                <h2>SPREDSHEETS</h2>
            </div>
            <Calculator />
        </section>
    )
}

function Calculator() {
    const [inputValues, setInputValues] = useState({
        loanYear: "",
        totalPrice: "",
        interestRatio: "",
        allowancePeriod: 0,
    });
    const [resultValues, setResultValues] = useState({
        deposit: "",
        sign: "",
        firstFloor: "",
        eighthFloor: "",
        sixteenThFloor: "",
        construction: "",
        license: "",
        delivery: "",
        ownMoney: "",
        loanMoney: "",
        monthlyCost: "",
        allowancePeriodCost: "",
        afterAllowancePeriodCost: ""
    })
    const handleInputChange = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value,
        });
    };
    const handleClearClick = () => {
        setInputValues({
            loanYear: '',
            totalPrice: '',
            interestRatio: '',
            allowancePeriod: '',
        });
        setResultValues({
            deposit: "",
            sign: "",
            firstFloor: "",
            eighthFloor: "",
            sixteenThFloor: "",
            construction: "",
            license: "",
            delivery: "",
            ownMoney: "",
            loanMoney: "",
            monthlyCost: "",
            allowancePeriodCost: "",
            afterAllowancePeriodCost: ""
        })
    };
    const handleResult = () => {
        const monthRatio = inputValues.interestRatio / 12 / 100;
        //-- 寬限年>0 --
        let loanMonth;
        let periodMoney;
        let avgMonthRatio;
        if ((inputValues.allowancePeriod) > 0) {
            //-- 月數= (貸款年限*12)-(寬限年*12) --
            loanMonth = ((inputValues.loanYear) * 12) - ((inputValues.allowancePeriod) * 12);
            periodMoney = ((inputValues.totalPrice * 0.75) * monthRatio) * 10000;
            avgMonthRatio = ((Math.pow((1 + monthRatio), loanMonth)) * monthRatio) / ((Math.pow(1 + monthRatio, loanMonth)) - 1);
        } else {
            //-- 月數= 貸款年限*12 --
            loanMonth = (inputValues.loanYear) * 12;
            avgMonthRatio = ((Math.pow((1 + monthRatio), loanMonth)) * monthRatio) / ((Math.pow(1 + monthRatio, loanMonth)) - 1);
        }


        const toMoneyStyle = (num) => {
            return num.toLocaleString('zh-TW', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        }
        setResultValues({
            deposit: 10,
            sign: toMoneyStyle(inputValues.totalPrice * 0.1 - 10),
            firstFloor: toMoneyStyle(inputValues.totalPrice * 0.02),
            eighthFloor: toMoneyStyle(inputValues.totalPrice * 0.02),
            sixteenThFloor: toMoneyStyle(inputValues.totalPrice * 0.02),
            construction: toMoneyStyle(inputValues.totalPrice * 0.02),
            license: toMoneyStyle(inputValues.totalPrice * 0.02),
            delivery: toMoneyStyle(inputValues.totalPrice * 0.05),
            ownMoney: toMoneyStyle(inputValues.totalPrice * 0.25),
            loanMoney: toMoneyStyle((inputValues.totalPrice * 0.75)),
            monthlyCost: toMoneyStyle(Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000)),
            allowancePeriodCost: toMoneyStyle(Math.floor(periodMoney)),
            afterAllowancePeriodCost: toMoneyStyle(Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000))
        });
    };
    useEffect(() => {
        console.log(typeof inputValues.allowancePeriod == "number")
    }, [inputValues])
    return (
        <section className="calculator">
            <div className="left">
                <div className="parameters">
                    <div className="box">
                        <label>
                            <p>貸款年限</p>
                            <div className="unitBox">
                                <input type="text" onChange={handleInputChange} name="loanYear" value={inputValues.loanYear} />
                                <span>年</span>
                            </div>

                        </label>

                    </div>
                    <div className="box">
                        <label>
                            <p>總價</p>
                            <div className="unitBox">
                                <input type="text" onChange={handleInputChange} name="totalPrice" value={inputValues.totalPrice} />
                                <span>萬元</span>
                            </div>

                        </label>
                    </div>
                    <div className="box">
                        <label>
                            <p>年利率</p>
                            <div className="unitBox">
                                <input type="text" onChange={handleInputChange} name="interestRatio" value={inputValues.interestRatio} />
                                <span>%</span>
                            </div>

                        </label>
                    </div>
                    <div className="box">
                        <label>
                            <p>寬限期</p>
                            <div className="unitBox">
                                <input type="text" onChange={handleInputChange} name="allowancePeriod" value={inputValues.allowancePeriod} />
                                <span>年</span>
                            </div>

                        </label>
                    </div>
                    <div className="imgBox">
                        <img src={webp[0].default} />
                    </div>
                </div>
                <div className="button">
                    <div className="calc" onClick={() => {
                        if (inputValues.totalPrice && inputValues.loanYear && inputValues.interestRatio) {
                            handleResult()
                        }
                    }}>
                        <p>試算</p>
                    </div>
                    <div className="delete" onClick={handleClearClick}>
                        <p>清除</p>
                    </div>
                    {/* <div className="print" onClick={() => {
                        window.print()
                    }}>
                        <p>列印</p>
                    </div> */}
                </div>
            </div>
            <div className="right">
                <div className="result">
                    <div className="left">
                        <div className="box">
                            <p>訂金:</p><span>{resultValues.deposit}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>簽約金:</p><span>{resultValues.sign}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>1樓底板:</p><span>{resultValues.firstFloor}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>8樓底板:</p><span>{resultValues.eighthFloor}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>16樓底板:</p><span>{resultValues.sixteenThFloor}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>結構完成:</p><span>{resultValues.construction}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>使照申請:</p><span>{resultValues.license}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>交屋款:</p><span>{resultValues.delivery}</span><p>萬元</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <p>自備款:</p><span>{resultValues.ownMoney}</span><p>萬元</p>
                        </div>
                        <div className="box">
                            <p>貸款:</p><span>{resultValues.loanMoney}</span><p>萬元</p>
                        </div>

                        {inputValues.allowancePeriod > 0 ?
                            <>
                                <div className="box">
                                    <p>寬限期:</p><span>{resultValues.allowancePeriodCost}</span><p>元</p>
                                </div>
                                <div className="box">
                                    <p>寬限期後:</p><span>{resultValues.afterAllowancePeriodCost}</span><p>元</p>
                                </div>
                            </> : <div className="box">
                                <p>本金攤還:</p><span>{resultValues.monthlyCost}</span><p>元</p>
                            </div>
                        }

                        <div className="box">
                            <p>暫收款:</p><span></span><p>萬元</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}