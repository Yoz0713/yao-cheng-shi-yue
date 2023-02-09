import './scss/all.scss';
import React from 'react';
import { render } from 'react-dom';
import Home from './component/index';
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
function App() {
    return (
        <>
            <Home />
        </>


    )
}
root.render(<App />);