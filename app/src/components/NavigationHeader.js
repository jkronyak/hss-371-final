import React from 'react';
import {Link} from 'react-router-dom';

import '../NavigationHeader.css'

const NavigationHeader = ()  => { 

    return(
        <div className='nav-div'>
            <nav className='navigation'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/results'>Results</Link>
                <Link to='/about'>About</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </div>
    );
}

export default NavigationHeader;