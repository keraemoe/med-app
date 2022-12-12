import React from 'react';
import { Card, Descriptions, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import s from './profilepage.module.css'

const ProfilePage = () => {
    return (
        <div className={s.container}>
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
        </div>
    );
};

export default ProfilePage;