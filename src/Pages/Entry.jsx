import React from 'react';
import EntryInstruction from '../components/EntryComponents/EntryInstruction/EntryInstruction';
import LayoutHeader from '../components/Layouts/layouts/LayoutHeader';
import ParticlesContainer from '../components/UI/ParticlesBackground/ParticlesBackground';

const Entry = () => {
    return (
        <LayoutHeader>
            <ParticlesContainer />
            <EntryInstruction />
        </LayoutHeader>
    );
};

export default Entry;


