import React from 'react'
import { Coporation } from './coporation';
import { DesignTeam } from './designTeam';
import { Route, Routes } from 'react-router-dom';
export default function Team() {
    return (
        <section className="team">
            <Routes>
                <Route path="/coporation/*" element={<Coporation />} />
                <Route path="/designTeam/*" element={<DesignTeam />} />
            </Routes>


        </section>
    )
}


