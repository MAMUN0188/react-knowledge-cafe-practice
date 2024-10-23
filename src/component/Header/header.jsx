import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between max-w-7xl mx-auto items-center my-5'>
            <h3 className='text-3xl font-bold'>Knowledge Cafe</h3>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;