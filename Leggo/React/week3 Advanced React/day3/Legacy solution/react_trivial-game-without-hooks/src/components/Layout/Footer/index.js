import React from 'react';
import './index.css';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='main-footer'>
            <img className='logo' src={logo} alt='logo of propulsion' />
        </footer>
    );
};

export default Footer;
