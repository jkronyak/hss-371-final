import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

import '../ShopItemPage.css'; 

import { 
    Box, Typography, Button
} from '@mui/material';

import { v4 as uuid } from 'uuid';


const ShopItemPage = () => {
    const { id } = useParams();
    
    const allData = useSelector((state) => state.data);
    const itemData = allData.shopItems.find((item) => Number(item.id) === Number(id));
    const shoppingCart = allData.shoppingCart;

    const dispatch = useDispatch();

	const [mouseHoverTime, setMouseHoverTime] = useState(0);

    const handleAddToCartClick = () => { 
        console.log("Add to Cart Clicked");
		dispatch(actions.addInteraction({type: 'CLICK', target: "ADD_TO_CART_BUTTON", timestamp: Date.now(), item: itemData.name}));
        dispatch(actions.addItemToCart(itemData));
    }

    const handleRemoveFromCartClick = () => {
        console.log("Remove from Cart Clicked");
		dispatch(actions.addInteraction({type: 'CLICK', target: "REMOVE_FROM_CART_BUTTON", timestamp: Date.now(), item: itemData.name}));
        dispatch(actions.removeItemFromCart(id));
    }

	const handleMouseEnter = (e) => { 
		console.log("Mouse Enter");
		console.log(e);
		setMouseHoverTime(Date.now());
	}

	const handleMouseLeave = (e, target) => { 
		console.log("Mouse Leave");
		if((Date.now() - mouseHoverTime) > 500)
			dispatch(actions.addInteraction({type: 'HOVER', target: target , timestamp: Date.now(), item: itemData.name, duration: (Date.now() - mouseHoverTime)}));
	}

	const handleMouseUp = (e, target) => {
		console.log("Mouse Up");
		dispatch(actions.addInteraction({type: 'MOUSE_UP', target: target , timestamp: Date.now(), item: itemData.name, selection: window.getSelection().toString()}));
	};

	const handleClick = (e, target) => { 
		console.log("Click");
		dispatch(actions.addInteraction({type: 'CLICK', target: target , timestamp: Date.now(), item: itemData.name}));
	};


	const handleDoubleClick = (e, target) => {
		console.log("Double Click");
		dispatch(actions.addInteraction({type: 'DOUBLE_CLICK', target: target , timestamp: Date.now(), item: itemData.name, selection: window.getSelection().toString()}));
	};


	useEffect(() => {
		const visitId = uuid();

		dispatch(actions.addInteraction({id: visitId, type: 'PAGE_VISIT', target: 'SHOP_ITEM_PAGE', timestamp: Date.now(), item: itemData.name}));
		return () => { 
			dispatch(actions.editInteractionDuration({id: visitId, timestamp: Date.now()}));
		}
	}, [dispatch, itemData.name]);

    return(
        <Box className='store-item-page-box' sx={{maxWidth: '40%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '32px',padding: '16px'}}>
			<Typography variant='h2'
				onMouseUp={(e) => handleMouseUp(e, `STORE_ITEM_NAME`)}
				onDoubleClick={(e) => handleDoubleClick(e, `STORE_ITEM_NAME`)}
			>{itemData.name}</Typography>

            <img className="store-page-img" src={itemData.imageUrl} alt={itemData.name} 
				onClick={ (e) => { handleClick(e, "STORE_ITEM_IMAGE")}}
				onMouseEnter={(e) => handleMouseEnter(e)}
				onMouseLeave={(e) => handleMouseLeave(e, `STORE_ITEM_IMAGE`)}
				/>
			<Typography
				onMouseUp={(e) => handleMouseUp(e, `STORE_ITEM_DESC`)}
				onDoubleClick={(e) => handleDoubleClick(e, `STORE_ITEM_DESC`)}
			>{itemData.description}</Typography>
            <Typography
				onMouseUp={(e) => handleMouseUp(e, `STORE_ITEM_PRICE`)}
				onDoubleClick={(e) => handleDoubleClick(e, `STORE_ITEM_PRICE`)}
			>Price: ${itemData.price.toLocaleString()}</Typography>
			{
				shoppingCart.some((curCartItem) => { return curCartItem.id === itemData.id })
				? <Button sx={{m: 2}} variant="contained" 
					onClick={() => handleRemoveFromCartClick()}
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e, "REMOVE_FROM_CART_BUTTON")}
					
					>Remove From Cart</Button>
				: <Button sx={{m: 2}} variant="contained" 
					onClick={() => handleAddToCartClick()} 
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e, "ADD_TO_CART_BUTTON")}
				>Add To Cart</Button>
				
			}
        </Box>
    )
};

export default ShopItemPage;