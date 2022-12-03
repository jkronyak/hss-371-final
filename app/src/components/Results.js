import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

import InteractionResult from './InteractionResult';

const Results = () => { 

    const allData = useSelector((state) => state.data);
    console.log(allData);
    const interactions = allData.userData.interactions;
    console.log("INTERACTIONS", interactions);
    const currentShoppingCart = allData.shoppingCart;
    console.log(currentShoppingCart);




    return(
		<div>
			<h2>Interactions</h2>
			{ 
				interactions.map((interaction) => { 
					return(
						<InteractionResult key={interaction.id} interaction={interaction}/>					
					)
				})
			}


			<h2>Cart</h2>
			{
				currentShoppingCart.map((item) => {
					return(
						<p key={Math.random()}>{item.name}</p>
					)
				})
			}
		</div>
	)
    
}
export default Results;

/*
			{
				interactions.map((interaction) => {
					console.log("SINGLE INTER", interaction);
					return (
						<p key={Math.random()}>{interaction.name}</p>
					)
				})

			}
*/