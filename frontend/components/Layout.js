import Header from './Header';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <p>footer</p>
        </React.Fragment>
    );
};


export default Layout;
