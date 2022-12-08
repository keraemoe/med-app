import React from 'react';
import LayoutFooter from '../../Layouts/layouts/LayoutFooter';
import LayoutHeader from '../../Layouts/layouts/LayoutHeader';
import ParticlesContainer from '../../UI/ParticlesBackground/ParticlesBackground';
import ProfilePage from './ProfilePage';



const Profile = () => {
    return (
        <div>
            <LayoutHeader />
            <ParticlesContainer />
            <ProfilePage />
            <LayoutFooter />
        </div>
    );
};

export default Profile;