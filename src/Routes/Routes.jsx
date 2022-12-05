import React from 'react';
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import Contacts from '../Pages/Contacts';
import Entry from '../Pages/Entry';
import HomePage from '../Pages/HomePage';

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/entry" element={<Entry/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="" />
            </Routes>
        </div>
    );
};

export default Rout;