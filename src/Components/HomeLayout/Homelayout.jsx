import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';

const Homelayout = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Homelayout;