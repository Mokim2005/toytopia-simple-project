import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const Homelayout = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;