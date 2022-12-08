import React from 'react';
import LayoutFooter from '../../components/Layouts/layouts/LayoutFooter';
import LayoutHeader from '../../components/Layouts/layouts/LayoutHeader';
import ParticlesContainer from '../../components/UI/ParticlesBackground/ParticlesBackground';
import ProfilePage from './ProfilePage';



const Profile = () => {
    return (
        <div>
            <LayoutHeader/>
            <ParticlesContainer/>
            <ProfilePage/>
            <LayoutFooter/>
        </div>
    );
};

export default Profile;