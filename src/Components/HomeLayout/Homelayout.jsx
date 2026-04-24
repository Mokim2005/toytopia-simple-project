import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';

const Homelayout = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100'>
            <div className='w-11/12 mx-auto'>
                <Navber />
                <Outlet />
                <Footer />
                <ToastContainer />
            </div>
        </div>
    );
};

export default Homelayout;