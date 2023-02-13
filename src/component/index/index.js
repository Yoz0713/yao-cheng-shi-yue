import React from 'react';
import Banner from "./banner"
import SecondPage from './secondPage';






//組合成首頁
export default function Home() {
    return (
        <div className='index'>
            <Banner />
            <SecondPage />
        </div>
    )
}