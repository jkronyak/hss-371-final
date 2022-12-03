import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

import axios from 'axios';

import { v4 as uuid } from 'uuid';

import { 
	Box
} from '@mui/material';

import { 
	DataGrid
} from '@mui/x-data-grid';


const Results = () => { 

	const dispatch = useDispatch();

    const allData = useSelector((state) => state.data);
    console.log(allData);
    const interactions = allData.userData.interactions;
    console.log("INTERACTIONS", interactions);
    const currentShoppingCart = allData.shoppingCart;
    console.log(currentShoppingCart);

	const [data, setData] = useState({});

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
		{ field: 'target', headerName: 'Target', width: 175 },
		{ field: 'timestamp', headerName: 'Timestamp', width: 175 },
		{ field: 'item', headerName: 'Item (If Any)', width: 175 },
		{ field: 'duration', headerName: 'Duration (Seconds)', width: 175 },
	];


    return(
		<div>
			<h2>Interactions</h2>
			<div>
				<Box sx={{width: '66%', marginLeft: 'auto', marginRight: 'auto'}}>

					{ rows && columns ? <DataGrid rows={rows} columns={columns} autoHeight/> : null }
				</Box>
					
			</div>

			<h2>Cart</h2>
			{
				currentShoppingCart.map((item) => {
					return(
						<p key={item.id}>{item.name}</p>
					)
				})
			}

			<h2>User Meta Data</h2>
			{
				(data && data.IPv4) ? <p>Your Public IP Address is {data.IPv4}</p> : <p>Unable to get Public IP Address</p>
			}
			
			<p>Your Machine Platform is {navigator.platform}</p>
			{navigator.cookieEnabled ? <p>Your cookies are enabled</p>: <p>Your cookies are disabled</p>}
			<p>Your Browser Agent is {navigator.userAgent}</p>
			{ data.city? <p>Your ISP location is {data.city}, {data.state}</p> : <p>Your ISP location cannot be confirmed</p>}
			<p>Your Browser is {detectBrowser()}</p>
			<p>Your Operating System is {operSys()}</p>
		</div>
	)
    
}
export default Results;
