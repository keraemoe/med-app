import React from 'react';
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import MCard from '../components/MedCardComponents/MedCard';
import Entry from '../Pages/Entry';
import HomePage from '../Pages/HomePage';

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/medcard" element={<MCard />} />
            </Routes>
        </div>
    );
};

export default Rout;