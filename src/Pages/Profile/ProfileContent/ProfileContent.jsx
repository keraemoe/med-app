﻿import React from 'react';
import s from './profile.module.css'
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ProfileContent = () => {
    return (
        <div className={s.head_profile}>
            <Avatar style={{ width: '100px', height: '100px', marginLeft: '50px', marginTop: '75px', backgroundColor: '#4200ff' }} icon={<UserOutlined style={{ fontSize: '70px', marginTop: '20px' }} />} />
            <div className={s.info_name}>
                <h1>Kera</h1>
                <hr className={s.hr_profile} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in nemo earum, sunt repellendus dolores qui. </p>
            </div>
        </div>
    );
};

export default ProfileContent;