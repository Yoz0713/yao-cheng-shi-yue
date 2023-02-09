import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { App } from "./app"
const domNode = document.getElementById('root');
const root = createRoot(domNode);
console.log(App())
function Index() {
    return (
        <>
            <App />
        </>


    )
}
root.render(<Index />);