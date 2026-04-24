import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';

const Homelayout = () => {
    return (
       <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white'>
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