import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../actions';


import { v4 as uuid } from 'uuid';

const Home = () => { 
    const dispatch = useDispatch();

    useEffect(() => {	

		const visitId = uuid();
		dispatch(actions.addInteraction({id: visitId, type: 'PAGE_VISIT', target: 'HOME', timestamp: Date.now()}));
		return () => { 
			dispatch(actions.editInteractionDuration({id: visitId, timestamp: Date.now()}));
		}

	}, [dispatch]);

    return(
        <div className='home-div'>
            <h2>About Us</h2>
            <p>Our names are Jared Kronyak and Erik Anhorn, and we are seniors here at Stevens. </p>
            <p>We are both Computer Science majors and security is very important to the both of us, which is why we 
                chose this topic for our final project. 
            </p>
            <br></br>
            <h2>Web Security Findings</h2>
            <p>Below are the findings of some quick searches on what risks exist on the Internet</p>
            <h4>What websites can collect about you</h4>
            <ul className='mainlist'>
                <li>Your Public IP Address</li>
                <li>Your general location using something like the Geolocation API</li>
                <li>Sites you have visited</li>
                <li>Your device's technical specs and operating system</li>
                <li>A compilation of your website browsing habits</li>
                <li>Any accounts you are logged into while accessing the site</li>
                <li>Keystrokes</li>
                <li>Browser 'Fingerprints'</li>
                <ul className='sublist'>
                    <li>This is a collection of data points that are used to create a unique identifier for you </li>
                    <li>You can see what your own fingerprint is <a href='https://coveryourtracks.eff.org/' target='_blank' rel='noreferrer'>here</a></li>
                </ul>
            </ul>
            <h4>What this data can be used for</h4>
            <ol>
                <li>Targeted Advertising</li>
                <li>Research</li>
                <li>Hackers can create a digital profile of you</li>
                <ul className='sublist'>
                    <li>Hackers can also infiltrate websites and use their access to track you and gain access to your usernames and passwords (!) if the timing is right</li>
                </ul>
            </ol>
            <p>We have put our paper on how we created the project below, we hope you found this website useful and informative!</p>
        </div>
    )

}

export default Home;