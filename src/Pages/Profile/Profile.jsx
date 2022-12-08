import React from 'react';
import LayoutHeader from '../../Layouts/layouts/LayoutHeader';
import ParticlesContainer from '../../UI/ParticlesBackground/ParticlesBackground';
import ProfilePage from './ProfilePage';



const Profile = () => {
    return (
        <div>
            <LayoutHeader />
            <ParticlesContainer />
            <ProfilePage />
        </div>
    );
};

export default Profile;