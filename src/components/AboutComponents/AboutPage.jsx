import React from 'react';
import s from './aboutpage.module.css'
import { Card } from 'antd';

const { Meta } = Card;

const AboutPage = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1 className={s.tag}>About Project:</h1>
            </div>
            <p className={s.content}>
                We make MedCare.kg, which is intended for use in hospitals. It will facilitate the work of doctors, and is also convenient for users to use.
                The project will solve the problem of long queues in public medical institutions.
            </p>
            <div className={s.content}>
                <h1 className={s.tag}>About US:</h1>
            </div>
            <div className={s.card_content}>
                <Card
                    hoverable
                    style={{
                        background: '#ffffff',
                        boxShadow: '6px 6px 33px #e0e0e0, -6px -6px 33px #ffffff',
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://bootdey.com/img/Content/avatar/avatar7.png" />}
                >
                    <Meta title="Tilek Zhyrgalbekov" description="Frontend Developer" />
                </Card>
                <Card
                    hoverable
                    style={{
                        background: '#ffffff',
                        boxShadow: '6px 6px 33px #e0e0e0, -6px -6px 33px #ffffff',
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://bootdey.com/img/Content/avatar/avatar3.png" />}
                >
                    <Meta title="Akinai Bekmambetova" description="Python Developer" />
                </Card>
            </div>
        </div>
    );
};

export default AboutPage;