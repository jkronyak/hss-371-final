import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

import '../ShopItemPage.css'; 

import { 
    Box, Typography, Button, Card, CardHeader, CardActions, CardMedia
} from '@mui/material';

const ShopItemPage = () => {
    const { id } = useParams();
    
    const allData = useSelector((state) => state.data);
    const itemData = allData.shopItems.find((item) => Number(item.id) === Number(id));
    const shoppingCart = allData.shoppingCart;

    const dispatch = useDispatch();

    const handleAddToCartClick = () => { 
        console.log("Add to Cart Clicked");
        dispatch(actions.addItemToCart(itemData));
    }

    const handleRemoveFromCartClick = () => {
        console.log("Remove from Cart Clicked");
        dispatch(actions.removeItemFromCart(id));
    }

    useEffect(() => { 
        console.log("useEffect fired");
        console.log(shoppingCart);
    }, [shoppingCart]);


    return(
        <Box className='store-item-page-box' sx={{maxWidth: '66%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '32px',padding: '16px'}}>
			<Typography variant='h2'>{itemData.name}</Typography>

            <img className="store-page-img" src={itemData.imageUrl} alt={itemData.name}/>
			<Typography>{itemData.description}</Typography>
            <Typography>Price: {itemData.price}</Typography>
			{
				shoppingCart.some((curCartItem) => { return curCartItem.id === itemData.id })
				? <Button sx={{m: 2}} variant="contained" onClick={() => handleRemoveFromCartClick()}>Remove From Cart</Button>
				: <Button sx={{m: 2}} variant="contained" onClick={() => handleAddToCartClick()} >Add To Cart</Button>
				
			}
        </Box>
    )
};

export default ShopItemPage;