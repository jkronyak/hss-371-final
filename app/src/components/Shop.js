import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

import { 
    Grid
} from '@mui/material';

import ShopGridItem from './ShopGridItem';

import { v4 as uuid } from 'uuid';


const Shop = () => {

    const dispatch = useDispatch();
	const [mouseHoverTime, setMouseHoverTime] = useState(0);



	const allData = useSelector((state) => state.data);
    const shopItems = allData.shopItems;
	const shoppingCart = allData.shoppingCart;

	const handleAddToCartClick = (item) => { 
        console.log("Add to Cart Clicked");
        dispatch(actions.addInteraction({type: 'CLICK', target: 'ADD_ITEM_TO_CART', timestamp: Date.now(), item: item.name}));
        dispatch(actions.addItemToCart(item));
    }

    const handleRemoveFromCartClick = (item) => {
        console.log("Remove from Cart Clicked");
        dispatch(actions.addInteraction({type: 'CLICK', target: 'REMOVE_ITEM_FROM_CART', timestamp: Date.now(), item: item.name}));
        dispatch(actions.removeItemFromCart(item.id));
	}

	const handleMouseEnter = (e) => { 
		console.log("Mouse Enter");
		setMouseHoverTime(Date.now());
	}

	const handleMouseLeave = (e, target) => { 
		console.log("Mouse Leave");
		if((Date.now() - mouseHoverTime) > 500)
			dispatch(actions.addInteraction({type: 'HOVER', target: target , timestamp: Date.now(), duration: (Date.now() - mouseHoverTime)}));
	}


	useEffect(() => {
		const visitId = uuid();
		dispatch(actions.addInteraction({id: visitId, type: 'PAGE_VISIT', target: 'SHOP', timestamp: Date.now()}));
		return () => { 
			dispatch(actions.editInteractionDuration({id: visitId, timestamp: Date.now()}));
		}
	}, [dispatch]);

    return(
        <div>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {
                    shopItems.map((item) => {
                        return(
                            <ShopGridItem item={item} key={item.id} shoppingCart={shoppingCart}
								handleAddToCartClick={handleAddToCartClick}
								handleRemoveFromCartClick={handleRemoveFromCartClick}
							/>
                        )
                    })
                }
            </Grid>
        </div>
        
    )
}
export default Shop;