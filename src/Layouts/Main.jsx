import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-600px)]'>
                <ScrollRestoration />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;