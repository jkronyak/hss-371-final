import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import actions from '../actions';

import { 
    Box, Typography, Button, Link
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
        <Box sx={{maxWidth: '66%', marginLeft: 'auto', marginRight: 'auto'}}>
            <p>I am the ShopItemPage component!</p>
            <Typography variant='h2' sx={{}}>{itemData.name}</Typography>
            <img className="store-page-img" src={itemData.imageUrl} alt={itemData.name}/>
            <Typography>Price: {itemData.price}</Typography>
            {
                shoppingCart.some((curCartItem) => { return curCartItem.id === itemData.id })
                    ? <Button variant="contained" onClick={() => handleRemoveFromCartClick()}>Remove From Cart</Button>
                    : <Button variant="contained" onClick={() => handleAddToCartClick()} >Add To Cart</Button>

            }
        </Box>
    )
};

export default ShopItemPage;