import React from 'react';
import { Link } from 'react-router-dom';


import { useDispatch } from 'react-redux';
import actions from '../actions';

import {
    Grid,
    Button
} from '@mui/material';



const ShopGridItem = (props) => {
    
    const dispatch = useDispatch();

    const onViewButtonPressed = () => { 
        console.log("View Button Pressed");
        dispatch(actions.addInteraction({type: "SHOP_ITEM_BUTTON_PRESS", timestamp: Date.now(), item: props.item.id}));
    };

    return(
        <Grid
            item 
            xs={2}
            sx ={{
                outline: '1px solid black',
                m: 4,
                p: 2,
                height: '400px',
                width: '300px',
				borderRadius: '15px',
				boxShadow: '2px 2px 10px;'
            }}
        >  
            <img className="store-item-img" src={props.item.imageUrl}></img>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <Link to={`/shop/${props.item.id}`}>
                <Button variant="contained" onClick={() => onViewButtonPressed()}>View</Button>
            </Link>
			{
				props.shoppingCart.some((curCartItem) => { return curCartItem.id === props.item.id })
				? <Button sx={{m: 2}} variant="contained" onClick={() => props.handleRemoveFromCartClick(props.item.id)}>Remove From Cart</Button>
				: <Button sx={{m: 2}} variant="contained" onClick={() => props.handleAddToCartClick(props.item)} >Add To Cart</Button>
				
			}
        </Grid>
    )
}

export default ShopGridItem;