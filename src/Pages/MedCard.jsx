import React from 'react';
import LayoutHeader from '../Layouts/layouts/LayoutHeader';
import MedCard from '../components/MedCardComponents/MedCard';
import ParticlesContainer from '../UI/ParticlesBackground/ParticlesBackground';


const MCard = () => {
// const MedCards = () => {
    return (
        <div>
            <LayoutHeader/>
            <ParticlesContainer />
            <MedCard />
        </div>
    );
};

export default MCard;