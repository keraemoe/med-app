import React from 'react';
import Footer from '../Footer/Footer';

const LayoutFooter = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};

export default LayoutFooter;