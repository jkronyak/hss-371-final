import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../actions';

import { Button } from '@mui/material';

const Home = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(actions.addInteraction({type: 'PAGE_VISIT', target: 'HOME', timestamp: Date.now()}));

	}, [dispatch]);

    return(
        <div>
            <p>Our names are Jared Kronyak and Erik Anhorn, and we are seniors here at Stevens. </p>
            <p>We are both Computer Science majors and security is very important to the both of us, which is why we 
                chose this topic for our final project. 
            </p>
            <br></br>
            <p>We have put our paper on how we created the project below, we hope you found this website useful and informative!</p>
        </div>
    )

}

export default Home;