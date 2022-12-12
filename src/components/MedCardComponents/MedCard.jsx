import React from 'react';
import s from './medcard.module.css'
import { Card } from 'antd';

const MedCard = () => {
    return (
        <div className={s.med_card}>
            <Card className={s.card} title="Card title" bordered={false} style={{ width: 300 }}>
                <span>Patient Name</span>
                <span>Alergies</span>
            </Card>
            <Card className={s.card} title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card className={s.card} title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card className={s.card} title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card className={s.card} title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card className={s.card} title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
};

export default MedCard;


