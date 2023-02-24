import './scss/all.scss';
import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import Home from './component/index';
import gsap from 'gsap';
import LifeFunction from './component/lifefunction';
import Layout from './component/layout';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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
        if (transitionStage == "fadeOut") {
            let gg = gsap.timeline({ ease: "none" })
            gg.fromTo(`.${transitionStage}`, {
                opacity: 1
            }, {

                duration: 0.8,
                opacity: 0,
                onComplete: () => {
                    setDisplayLocation(location);

                    setTransistionStage("fadeIn")



                }
            })
        } else {
            let gg = gsap.timeline({ ease: "none" })
            gg.fromTo(`.${transitionStage}`, {
                opacity: 0
            }, {

                duration: 1.2,
                opacity: 1,
            })
        }

    }, [transitionStage])
    return (
        <div
            className={`${transitionStage}`}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={<Home />} />
                <Route path="/lifefunction" element={<LifeFunction />} />
            </Routes>
        </div>
    )
}