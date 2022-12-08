import React from 'react';
import ProfileContent from './ProfileContent/ProfileContent';
import s from './profilePage.module.css'
import ProfileTab from './ProfileTab/ProfileTab';

const ProfilePage = () => {
    return (
        <div className={s.profile_items}>
            <ProfileContent/>
            <ProfileTab/>
        </div>
    );
};

export default ProfilePage;