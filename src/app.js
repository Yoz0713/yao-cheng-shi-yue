import './scss/all.scss';
import React from 'react';
import Home from './component/index';
import LifeFunction from './component/lifefunction';
import Layout from './component/layout';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
export default function App() {

    return (
        <>

            <Router>
                <Layout />
                <Routes>
                    <Route element={<Home />} path={'/'}></Route>
                    <Route element={<LifeFunction />} path={'/lifefunction'}></Route>
                </Routes>
            </Router>

        </>



    )
}
