import React from 'react';
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import App from '../Pages/404';
import About from '../Pages/About';
import Entry from '../Pages/Entry';
import HomePage from '../Pages/HomePage';
import Profile from '../Pages/Profile';

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<App />} />
            </Routes>
        </div>
    );
};

export default Rout;