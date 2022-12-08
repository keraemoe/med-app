import React from 'react';
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import Entry from '../Pages/Entry';
import HomePage from '../Pages/HomePage';
import MedCards from '../Pages/MedCard';
import Profile from '../Pages/Profile/Profile';

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/medcard" element={<MedCards/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </div>
    );
};

export default Rout;