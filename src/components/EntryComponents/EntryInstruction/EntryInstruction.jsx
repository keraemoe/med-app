import React from 'react';
import s from "./entryInstruction.module.css"

const EntryInstruction = () => {
    return (
        <div id="inst">
            <div className={s.container}>
                <div className={s.main_container}>
                    <div className={s.tag}>
                        <h1>Как записаться </h1>
                        <p>на прием врачу</p>
                    </div>
                    <div className="container_info">
                        
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EntryInstruction;