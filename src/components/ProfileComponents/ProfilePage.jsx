import React from 'react';
import { Card, Descriptions, Avatar, Breadcrumb, Calendar } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

import s from './profilepage.module.css'

const ProfilePage = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <div className={s.container}>
            <Breadcrumb className={s.items}>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="profile">
                    <UserOutlined />
                    <span>Profile</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
            <div className={s.user}>
                <Avatar className={s.ava} size={64} icon={<UserOutlined />} />
                <Descriptions title="Tilek Zhyrgalbekov">
                    <Descriptions.Item label="Username"> kera</Descriptions.Item>
                    <Descriptions.Item label="Telephone">+996501341920</Descriptions.Item>
                    <Descriptions.Item label="Gender">Male</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        Kyrgyzstan, Bishkek, Ibraimova 115/1 .str
                    </Descriptions.Item>
                </Descriptions>
            </div>
            <h1 className={s.usermed}>User Med Card:</h1>
            <div className={s.med_card}>
                <Card className={s.card} title="Patient 1" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
                <Card className={s.card} title="Patient 2" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
                <Card className={s.card} title="Patient 3" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
                <Card className={s.card} title="Patient 4" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
                <Card className={s.card} title="Patient 5" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
                <Card className={s.card} title="Patient 6" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
                <Card className={s.card} title="Patient 7" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
                <Card className={s.card} title="Patient 8" bordered={false} style={{ width: 300 }}>
                    <span>Patient Name</span>
                </Card>
            </div>
            <h1 className={s.calendar}>Calendar:</h1>
            <Calendar className={s.items} onPanelChange={onPanelChange} />
        </div>
    );
};

export default ProfilePage;