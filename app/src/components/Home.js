import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { List, Chip, Divider, ListSubheader, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Cookie from '@mui/icons-material/Cookie';
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
            <Divider variant='middle'>
                <Chip label='About Us' sx={{fontWeight: 700, fontSize: '22px'}}/>
            </Divider>
            <p>Our names are Jared Kronyak and Erik Anhorn, and we are seniors here at Stevens. </p>
            <p>We are both Computer Science majors and security is very important to the both of us, which is why we 
                chose this topic for our final project. 
            </p>
            <Divider variant='middle'>
                <Chip label='Web Security Findings' sx={{fontWeight: 700, fontSize: '22px'}}/>
            </Divider>
            <p>
                Below are the findings of a few quick searches on what risks exist on the Internet
            </p>
			<div className='container'>
				<List subheader={
					<ListSubheader component='h4'>
						<Chip label='What websites can collect about you' sx={{fontWeight: 600, fontSize: '16px', color: 'grey'}}/>
					</ListSubheader>}
				>
					<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
						<ListItemIcon className='mainlist'>
							<Cookie/>
						</ListItemIcon>
						<ListItemText primary='Your Public IP Address' className='mainlist'/>
					</ListItem >
					<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
							<Cookie/>
						</ListItemIcon>
						<ListItemText primary='Your general location using a service like the Geolocation API' className='mainlist'/>
					</ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Cookie/>
                        </ListItemIcon>
                    <ListItemText primary='Sites you have visited' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Cookie/>
                        </ListItemIcon>
                        <ListItemText primary="Your device's technical specs and operating system" className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Cookie/>
                        </ListItemIcon>
                        <ListItemText primary='A compilation of your website browsing habits' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Cookie/>
                        </ListItemIcon>
                        <ListItemText primary='Any accounts you are logged into while accessing the site' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Cookie/>
                        </ListItemIcon>
                        <ListItemText primary='Keystrokes' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Cookie/>
                        </ListItemIcon>
                        <ListItemText primary="Browser 'Fingerprints'" className='mainlist'/>
                    </ListItem>
                    <ListItem inset sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist'>
                            <li>This is a collection of data points that are used to create a unique identifier for you</li>
                            <li>You can see what your own fingerprint is <a href='https://coveryourtracks.eff.org/' target='_blank' rel='noreferrer'>here</a></li>
                        </ul>
                    </ListItem>
				</List>
                <List subheader={
					<ListSubheader component='h4'>
                        <Chip label='What this data can be used for' sx={{fontWeight: 700, fontSize: '16px', color: 'grey'}}/>
                    </ListSubheader>}
				>
					<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
						<ListItemIcon className='mainlist'>
							<Cookie/>
						</ListItemIcon>
						<ListItemText primary='Your Public IP Address' className='mainlist'/>
					</ListItem >
				</List>
			</div>
        </div>
    )
}

        //     <h2>Web Security Findings</h2>
        //     <p>Below are the findings of some quick searches on what risks exist on the Internet</p>
        //     <h4>What websites can collect about you</h4>
        //     <h4>What this data can be used for</h4>
        //     <ol>
        //         <li>Targeted Advertising</li>
        //         <li>Research</li>
        //         <li>Hackers can create a digital profile of you</li>
        //         <ul className='sublist'>
        //             <li>Hackers can also infiltrate websites and use their access to track you and gain access to your usernames and passwords (!) if the timing is right</li>
        //         </ul>
        //     </ol>
        //     <p>We have put our paper on how we created the project below, we hope you found this website useful and informative!</p>
        // </div>
export default Home;