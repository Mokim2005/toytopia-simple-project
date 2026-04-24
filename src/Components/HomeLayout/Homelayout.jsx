import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';

const Homelayout = () => {
    return (
       <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white'>
            <div className='container mx-auto'>
                <Navber />
                <Outlet />
                <Footer />
                <ToastContainer />
            </div>
        </div>
    );
};

export default Homelayout;