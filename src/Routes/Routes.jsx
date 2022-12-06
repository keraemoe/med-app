import React from 'react';
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import Login from '../components/UI/Auth/Login/Login';
import Register from '../components/UI/Auth/Register/Register';
import Contacts from '../Pages/Contacts';
import Entry from '../Pages/Entry';
import HomePage from '../Pages/HomePage';

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default Rout;