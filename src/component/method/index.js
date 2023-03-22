import React from 'react'
import WaterProof from './waterProof';
import Structure from './structure';
import Sweet from './sweet';
import { Route, Routes } from 'react-router-dom';

export default function Method() {
    return (
        <Routes>
            <Route path="/structure" element={<Structure />} />
            <Route path="/waterProof" element={<WaterProof />} />
            <Route path="/sweet" element={<Sweet />} />
        </Routes>
    )
}
