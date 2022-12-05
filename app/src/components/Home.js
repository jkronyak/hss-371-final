import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
    List, 
    Chip, 
    Divider, 
    ListSubheader, ListItem, ListItemText, ListItemIcon, 
    Typography 
} from '@mui/material';
import Cookie from '@mui/icons-material/Cookie';
import PrivacyTip from '@mui/icons-material/PrivacyTip';
import Lock from '@mui/icons-material/Lock';
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
            <Divider variant='middle' sx={{m: 2, maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Chip label='About' sx={{fontWeight: 700, fontSize: '22px'}}/>
            </Divider>
            <Typography sx={{maxWidth: '65%', marginLeft: 'auto', marginRight: 'auto'}}>
                Our names are Jared Kronyak and Erik Anhorn, and we are seniors here at Stevens. 
            </Typography>
            <Typography sx={{maxWidth: '65%', marginLeft: 'auto', marginRight: 'auto'}}>
                We are both Computer Science majors and security is very important to the both of us, which is why we 
                chose this topic for our final project. 
            </Typography>
			<Typography sx={{maxWidth: '65%', marginLeft: 'auto', marginRight: 'auto'}}>
				<br></br>
				The purpose of this website is to demonstrate just how much data websites can collect about their users.
				It includes a simple storefront for you interact with. Simply visit the Shop page, navigate around, and add some items to your cart.
				Once you are done, visit the Results page, or hit checkout on the Cart page.
				<br></br>
				<br></br>
				On the Results page, you will see any metadata we were able to collect about you.
				This page also shows you any of the interactions you had with the website, how long you spent on each, etc. 
            </Typography>
            <Divider variant='middle' sx={{m: 2, maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Chip label='Web Security Findings' sx={{fontWeight: 700, fontSize: '22px'}}/>
            </Divider>
            <p className='subheader'>
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
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
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
							<PrivacyTip/>
						</ListItemIcon>
						<ListItemText primary='Targeted Advertising' className='mainlist'/>
					</ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
						<ListItemIcon className='mainlist'>
							<PrivacyTip/>
						</ListItemIcon>
						<ListItemText primary='Research' className='mainlist'/>
					</ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
						<ListItemIcon className='mainlist'>
							<PrivacyTip/>
						</ListItemIcon>
						<ListItemText primary='Hackers can create a digital profile of you' className='mainlist'/>
					</ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist2'>
                            <li>Hackers can also infiltrate websites and use their access to track you and gain access to your usernames and passwords (!) if the timing is right</li>
                        </ul>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
						<ListItemIcon className='mainlist'>
							<PrivacyTip/>
						</ListItemIcon>
						<ListItemText primary='Predict Future habits and actions' className='mainlist'/>
					</ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
						<ListItemIcon className='mainlist'>
							<PrivacyTip/>
						</ListItemIcon>
						<ListItemText primary='Capturing sensitive information' className='mainlist'/>
					</ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist2'>
                            <li>Third party cookies can track you across sites and capture your login information, even if they aren't using it maliciously</li>
                        </ul>
                    </ListItem>
				</List>
			</div>
            <Divider variant='middle' sx={{m: 2, maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Chip label='What You Can Do About it' sx={{fontWeight: 700, fontSize: '22px'}}/>
            </Divider>
            <div className='container'>
                <List subheader={
                    <ListSubheader component='h4'>
                        <Chip label='Here are some ways to increase your security online' sx={{fontWeight: 600, fontSize: '16px', color: 'grey'}}/>
                    </ListSubheader>}
                >
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Lock/>
                        </ListItemIcon>
                        <ListItemText primary='Disable third-party cookies when possible' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Lock/>
                        </ListItemIcon>
                        <ListItemText primary='Avoid Phishing and other malicious links or sites' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist2'>
                            <li>Never click on a link from a suspicious source</li>
                            <li>Go directly to websites, similar to how you would call a number back if you believe there is something suspicious about the call</li>
                        </ul>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Lock/>
                        </ListItemIcon>
                        <ListItemText primary='Avoid unnecessarily giving out personal information and other private data' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist2'>
                            <li>Only give out data like financial information, your social security number and even your email address when absolutely necessary</li>
                        </ul>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Lock/>
                        </ListItemIcon>
                        <ListItemText primary='Use browsers like DuckDuckGo that block cookies by default' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Lock/>
                        </ListItemIcon>
                        <ListItemText primary='Do not interact with pop-ups on websites' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist2'>
                            <li>They may seem legitimate, but they are some of the easiest ways for hackers to infiltrate your machine and get your information</li>
                        </ul>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Lock/>
                        </ListItemIcon>
                        <ListItemText primary='Only download from secure sites that you trust' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist2'>
                            <li>Many downloads from sites can have malware hidden in them, compromising your machine as soon as you click download</li>
                        </ul>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
                        <ListItemIcon className='mainlist'>
                            <Lock/>
                        </ListItemIcon>
                        <ListItemText primary='Use services like password managers to increase your security' className='mainlist'/>
                    </ListItem>
                    <ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 10, color: 'grey'}}>
                        <ul className='sublist2'>
                            <li>Password managers store encryptions of your passwords, so they never keep your plaintext passwords stored on a server</li>
                        </ul>
                    </ListItem>
                </List>
            </div>
            <Divider variant='middle' sx={{m: 2, maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Chip label='Works Cited' sx={{fontWeight: 700, fontSize: '22px'}}/>
            </Divider>
            <div className='container'>
                <ul className='sublist'>
                    <br></br>
                    <li>
                        Crawford, E. (2021, October 10). Website tracking: Why and how do websites track you? CookiePro. 
                        From https://www.cookiepro.com/blog/website-tracking/ 
                    </li>
                    <br></br>
					<li>
						Hood, J. (2020, October 12). Jacquard Loom. Age of Revolution. 
						From https://ageofrevolution.org/200-object/jacquard-loom/ 
					</li>
					<br></br>
                    <li>
                        Kishore, A. (2019, August 31). What type of data do websites collect about you? Online Tech Tips. 
                        From https://www.online-tech-tips.com/computer-tips/what-type-of-data-do-websites-collect-about-you-2/ 
                    </li>
                    <br></br>
					<li>
						Latson, J. (2015, April 27). Computer mouse history: How the helpful tech innovation came to be. Time.
						From https://time.com/3831359/computer-mouse-history/ 
					</li>
					<br></br>
                    <li>
                        Security, P. (2019, May 13). Top 10 tips for safer, more secure web browsing - panda security. Panda Security Mediacenter. 
                        From https://www.pandasecurity.com/en/mediacenter/mobile-news/tips-browsing-safer/ 
                    </li>
					<br></br>
					<li>
						Video Game Console Library. (n.d.). Odyssey Magnavox. Video Game Console Library. 
						From https://www.videogameconsolelibrary.com/pg70-odyssey.htm#page=reviews 
					</li>
                </ul>
            </div>
        </div>
    )
}
export default Home;