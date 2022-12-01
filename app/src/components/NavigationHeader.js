import React from 'react';
import {Link} from 'react-router-dom';

import '../NavigationHeader.css'

const NavigationHeader = ()  => { 

    return(
        <div>
            <nav className='navigation'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/results'>Results</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
}

export default NavigationHeader;