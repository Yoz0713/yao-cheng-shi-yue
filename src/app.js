import './scss/all.scss';
import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import Home from './component/index';
import LifeFunction from './component/lifefunction';
import Team from './component/team';
import Layout from './component/layout';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import MoveBack from './component/config/moveBack';
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
        <div
            className={`${transitionStage}`}
            style={location.pathname !== "/" ? { position: "relative", pointerEvents: "none", zIndex: 21 } : {}}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={<Home />} />
                <Route path="/lifefunction" element={<LifeFunction setTransistionStage={setTransistionStage} />} />
                <Route path="/team/*" element={<Team />} />
                <Route path="*" element={<><h1 style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>目前頁面正在製作中，請點選空白處回首頁</h1><MoveBack /></>} />
            </Routes>
        </div>
    )
}