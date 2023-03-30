import './scss/all.scss';
import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import Home from './component/index';
import LifeFunction from './component/lifefunction';
import Team from './component/team';
import Layout from './component/layout';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import GreenBg from "../img/layout/webp/000-green-bg.webp"
import Urban from './component/urban';
import Method from './component/method';
import Equipment from './component/equipment';
import Calculation from './component/calculation/calculation';
import Product from './component/product';
import News from './component/news';
import Market from './component/market';
export default function App() {

    return (
        <>

            <Router>
                <Layout />
                <Content />

            </Router>

        </>



    )
}

function Content() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location]);
    useLayoutEffect(() => {
        let gg;
        let gg2;

        if (transitionStage == "fadeOut") {
            gg = gsap.timeline({ ease: "none" })
            gg.to(`.${transitionStage}`, {

                duration: 0.8,
                opacity: 0,
                onComplete: () => {
                    setDisplayLocation(location);
                    if (location.pathname != "/lifefunction") {
                        setTransistionStage("fadeIn")
                    }
                    // setTimeout(() => {
                    //     setTransistionStage("fadeIn")
                    // }, 200)




                }
            })
        } else {
            gg2 = gsap.timeline({ ease: "none" })
            gg2.to(`.${transitionStage}`, {

                duration: 1.2,
                opacity: 1,
            })
        }
        return () => {
            if (transitionStage == "fadeOut") {
                gg.revert();
            } else {
                gg2.revert();
            }


        }
    }, [transitionStage])
    return (
        <div id="container-wrapper" style={{ backgroundImage: `url(${GreenBg})`, backgroundSize: "cover", backgroundRepeat: "repeat" }}>
            <div
                className={`${transitionStage}`}
                style={location.pathname !== "/" ? { position: "relative", pointerEvents: transitionStage == "fadeOut" ? "auto" : "none", zIndex: 21, } : null}
            >
                <Routes location={displayLocation}>
                    <Route path="/" element={<Home />} />
                    <Route path="/lifefunction" element={<LifeFunction setTransistionStage={setTransistionStage} />} />
                    <Route path="/team/*" element={<Team />} />
                    <Route path="/urban" element={<Urban />} />
                    <Route path="/method/*" element={<Method />} />
                    <Route path="/equipment/*" element={<Equipment />} />
                    <Route path="/calculation" element={<Calculation />} />
                    <Route path="/product/*" element={<Product />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="*" element={<><h1 style={{ color: "#fff", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>目前頁面正在製作中，請點選空白處回首頁</h1></>} />
                </Routes>
            </div>
        </div>

    )
}