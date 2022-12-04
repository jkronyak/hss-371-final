import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

import axios from 'axios';

import { v4 as uuid } from 'uuid';

import { 
	Box,
	Button,
	Typography,
	Chip,
	Divider,
	List, ListSubheader, ListItem, ListItemText, ListItemIcon
} from '@mui/material';

import Cookie from '@mui/icons-material/Cookie';

import { 
	DataGrid
} from '@mui/x-data-grid';


const Results = () => { 

	const dispatch = useDispatch();

    const allData = useSelector((state) => state.data);
    const interactions = allData.userData.interactions;

	const [data, setData] = useState({});
	const [interactionsToggle, setInteractionsToggle] = useState(true);


	useEffect ( () => {
		const getData = async() => {
			try {
				const res = await axios.get('https://geolocation-db.com/json/');
				setData(res.data);
			} catch (e) {
				console.log("Error", e);
			}
		}
		getData();
		const visitId = uuid();
		dispatch(actions.addInteraction({id: visitId, type: 'PAGE_VISIT', target: 'RESULTS', timestamp: Date.now(), item: "N/A"}));
		return () => { 
			dispatch(actions.editInteractionDuration({id: visitId, timestamp: Date.now()}));
		}
	}, [dispatch])

	
	const detectBrowser = () => { 
		var sBrowser, sUsrAg = navigator.userAgent;
		if (sUsrAg.indexOf("Firefox") > -1) {
			sBrowser = "Mozilla Firefox";
			// "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
		  } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
			sBrowser = "Samsung Internet";
			// "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
		  } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
			sBrowser = "Opera";
			// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
		  } else if (sUsrAg.indexOf("Trident") > -1) {
			sBrowser = "Microsoft Internet Explorer";
			// "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
		  } else if (sUsrAg.indexOf("Edge") > -1) {
			sBrowser = "Microsoft Edge";
			// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
		  } else if (sUsrAg.indexOf("Chrome") > -1) {
			sBrowser = "Google Chrome or Chromium";
			// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
		  } else if (sUsrAg.indexOf("Safari") > -1) {
			sBrowser = "Apple Safari";
			// "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
		  } else {
			sBrowser = "unknown";
		  }
		  return sBrowser;
	}
	const operSys = () => {
		var OperSysName="Unknown OS";
		if (navigator.userAgent.indexOf("Win") !==- 1) OperSysName = "Windows";
		if (navigator.userAgent.indexOf("Mac") !== -1) OperSysName = "MacOS";
		if (navigator.userAgent.indexOf("X11") !== -1) OperSysName = "UNIX";
		if (navigator.userAgent.indexOf("Linux") !== -1) OperSysName = "Linux";
		return OperSysName;
		// document.getElementById("OS").innerHTML = "The current operating system used in this machine is " + OperSysName;
	}

	const rows = interactions.map((interaction) => { 
		return {
			id: interaction.id,
			type: interaction.type,
			target: interaction.target,
			timestamp: new Date(interaction.timestamp).toLocaleString(),
			item: interaction.item,
			duration: interaction.duration / 1000 || 'N/A',
		}
	})

	// Interaction Type, Target, Timestamp, Item
	const columns = [
		{ field: 'type', headerName: 'Interaction Type', width: 175 },
		{ field: 'target', headerName: 'Target', width: 250 },
		{ field: 'timestamp', headerName: 'Timestamp', width: 200 },
		{ field: 'item', headerName: 'Item (If Any)', width: 175 },
		{ field: 'duration', headerName: 'Duration (Seconds)', width: 175 },
	];


    return(
		<div>
            <Divider variant='middle'  sx={{m: 2, maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Chip label='Results Page' sx={{fontWeight: 700, fontSize: '22px'}}/>
            </Divider>
			<Typography  sx={{maxWidth: '65%', marginLeft: 'auto', marginRight: 'auto'}} >
				This is the results page. Here you can see the data that was collected during your visit to the site!
				The collected data was assigned two different categories: <b>User Metadata</b> and <b>Site Interactions</b>.
				User Metadata includes any information we were able collect from your browser and device.
				Site Interactions includes any actions you took on the site, such as clicking on a button or viewing a page.
				Companies use this type of data to predict what products their users may be more likely to purchase. 

			</Typography>
			<div>
            <Divider variant='middle'  sx={{m: 2, maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
					<Chip label='User Metadata' sx={{fontWeight: 700, fontSize: '22px'}}/>
				</Divider>
				<div className='container'>
					<List>
						<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
							<ListItemIcon className='mainlist'>
								<Cookie/>
							</ListItemIcon>
							<ListItemText primary={`Your Public IP Address is: ${(data && data.IPv4 || 'Unable to retrieve')}`} className='mainlist'/>
						</ListItem>
						<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
							<ListItemIcon className='mainlist'>
								<Cookie/>
							</ListItemIcon>
							<ListItemText primary={`Your Machine Platform is ${navigator.platform}`} className='mainlist'/>
						</ListItem>
						<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
							<ListItemIcon className='mainlist'>
								<Cookie/>
							</ListItemIcon>
							<ListItemText primary={`Your cookes are: ${navigator.cookieEnabled ? "enabled" : "disabled"}`} className='mainlist'/>
						</ListItem>
						<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
							<ListItemIcon className='mainlist'>
								<Cookie/>
							</ListItemIcon>
							<ListItemText primary={`Your User Agent is: ${navigator.userAgent}`} className='mainlist'/>
						</ListItem>
						<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
							<ListItemIcon className='mainlist'>
								<Cookie/>
							</ListItemIcon>
							<ListItemText primary={`Your ISP Location is: ${data.city ? ` ${data.city}, ${data.state} ` : "Unable to retrieve'"}`} className='mainlist'/>
						</ListItem>
						<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
							<ListItemIcon className='mainlist'>
								<Cookie/>
							</ListItemIcon>
							<ListItemText primary={`Your Browser is: ${detectBrowser()}`} className='mainlist'/>
						</ListItem>
						<ListItem sx={{display: 'list-item', padding: 0, textAlign: 'center', right: 20}}>
							<ListItemIcon className='mainlist'>
								<Cookie/>
							</ListItemIcon>
							<ListItemText primary={`Your Browser is: ${operSys()}`} className='mainlist'/>
						</ListItem>
					</List>
					
				</div>
			</div>
			
            <Divider variant='middle'  sx={{m: 2, maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
					<Chip label='Site Interactions' sx={{fontWeight: 700, fontSize: '22px'}}/>
				</Divider>
			<Button variant="contained" sx={{marginBottom: '16px'}} onClick={() => setInteractionsToggle(!interactionsToggle)}>Show/Hide</Button>
			{
				interactionsToggle
				?
				<div>
					<Box sx={{width: '66%', marginLeft: 'auto', marginRight: 'auto'}}>

						{ rows && columns ? <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10, 25, 50]}autoHeight/> : null }
					</Box>	
				</div>
				: null
			}
		</div>
	)
    
}
export default Results;
