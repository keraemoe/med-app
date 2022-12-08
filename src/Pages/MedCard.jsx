import React from 'react';
import Footer from '../components/Layouts/Footer/Footer';
import LayoutHeader from '../components/Layouts/layouts/LayoutHeader';
import MedCard from '../components/MedCardComponents/MedCard';
import ParticlesContainer from '../components/UI/ParticlesBackground/ParticlesBackground';


const MedCards = () => {
    return (
        <div>
            <LayoutHeader />
            <ParticlesContainer />
            <MedCard />
            <Footer/>
        </div>
    );
};

export default MedCards;