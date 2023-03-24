import React from 'react'
import Kitchen from "./kitchen";
import Bathroom from "./bathroom";
import WoodFloor from "./woodFloor"
import ElectronLock from "./electronLock"
import WaterPurifier from "./waterPurifier"
import Window from "./window"
import Door from "./door"
import { Route, Routes } from 'react-router-dom';
export default function Equipment() {
    return (
        <section className="equipment">
            <Routes>
                <Route path="/kitchen" element={<Kitchen />} />
                <Route path="/bathroom" element={<Bathroom />} />
                <Route path="/floor" element={<WoodFloor />} />
                <Route path="/electronLock" element={<ElectronLock />} />
                <Route path="/purifier" element={<WaterPurifier />} />
                <Route path="/window" element={<Window />} />
                <Route path="/door" element={<Door />} />
            </Routes>

        </section>
    )
}
