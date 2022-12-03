import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { useDispatch } from 'react-redux';
import actions from '../actions';

import {
    Grid,
    Button,
	Typography
} from '@mui/material';



const ShopGridItem = (props) => {
    
    const dispatch = useDispatch();
	const [mouseHoverTime, setMouseHoverTime] = useState(0);

    const onViewButtonPressed = () => { 
        console.log("View Button Pressed");
        dispatch(actions.addInteraction({type: "CLICK", target: "SHOP_VIEW_BUTTON", timestamp: Date.now(), item: props.item.name}));
    };

	const handleMouseEnter = (e) => { 
		console.log("Mouse Enter");
		setMouseHoverTime(Date.now());
	}

	const handleMouseLeave = (e, target) => { 
		console.log("Mouse Leave");
		if((Date.now() - mouseHoverTime) > 500)
			dispatch(actions.addInteraction({type: 'HOVER', target: target, timestamp: Date.now(), duration: (Date.now() - mouseHoverTime), item: props.item.name}));
	}
	
	const handleClick = (e, target) => { 
		console.log("Click");
		dispatch(actions.addInteraction({type: 'CLICK', target: target , timestamp: Date.now(), item: props.item.name}));
	};

    return(
        <Grid
            item 
            xs={2}
            sx ={{
                outline: '1px solid black',
                m: 4,
                p: 2,
                maxHeight: '400px',
                maxwidth: '300px',
				borderRadius: '15px',
				boxShadow: '2px 2px 10px;'
            }}
        >  
            <img className="store-item-img" src={props.item.imageUrl} alt={props.item.name}
				onClick={ (e) => { handleClick(e, "STORE_ITEM_IMAGE")}}
				onMouseEnter={(e) => handleMouseEnter(e)}
				onMouseLeave={(e) => handleMouseLeave(e, `STORE_ITEM_IMAGE`)}
			></img>
            <Typography>{props.item.name}</Typography>
            <Typography>${props.item.price}</Typography>
            <Link to={`/shop/${props.item.id}`}>
                <Button variant="contained" 
				onClick={() => onViewButtonPressed()}
				onMouseEnter={(e) => handleMouseEnter(e)}
				onMouseLeave={(e) => handleMouseLeave(e, "VIEW_ITEM_BUTTON")}
				>View</Button>
            </Link>
			{
				props.shoppingCart.some((curCartItem) => { return curCartItem.id === props.item.id })
				? <Button sx={{m: 2}} variant="contained" 
					onClick={() => props.handleRemoveFromCartClick(props.item)} 
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e, "REMOVE_FROM_CART_BUTTON")}
					>Remove From Cart</Button>
				: <Button sx={{m: 2}} variant="contained" 
					onClick={() => props.handleAddToCartClick(props.item)} 
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e, "ADD_TO_CART_BUTTON")}
					>Add To Cart</Button>
				
			}
        </Grid>
    )
}

export default ShopGridItem;