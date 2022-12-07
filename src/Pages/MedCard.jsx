import React from 'react';
import LayoutHeader from '../components/Layouts/layouts/LayoutHeader';
import MedCard from '../components/MedCardComponents/MedCard';
import ParticlesContainer from '../components/UI/ParticlesBackground/ParticlesBackground';


const Contacts = () => {
    return (
        <div>
            <LayoutHeader />
            <ParticlesContainer />
            <LayoutHeader />
            <MedCard />
        </div>
    );
};

export default Contacts;