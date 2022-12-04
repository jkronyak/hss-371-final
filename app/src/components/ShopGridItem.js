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

	const handleMouseUp = (e, target) => {
		console.log("Mouse Up");
		if(window.getSelection().toString() !== "")
			dispatch(actions.addInteraction({type: 'MOUSE_UP', target: target , timestamp: Date.now(), item: props.item.name, selection: window.getSelection().toString()}));
	};

	const handleDoubleClick = (e, target) => {
		console.log("Double Click");
		if(window.getSelection().toString() !== "")
			dispatch(actions.addInteraction({type: 'DOUBLE_CLICK', target: target , timestamp: Date.now(), item: props.item.name, selection: window.getSelection().toString()}));
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
            <Typography
				onMouseUp={(e) => handleMouseUp(e, `STORE_ITEM_NAME`)}
				// onDoubleClick={(e) => handleDoubleClick(e, `STORE_ITEM_NAME`)}
			>{props.item.name}</Typography>
            <Typography
				onMouseUp={(e) => handleMouseUp(e, `STORE_ITEM_PRICE`)}
				// onDoubleClick={(e) => handleDoubleClick(e, `STORE_ITEM_PRICE`)}
			>${props.item.price.toLocaleString()}</Typography>
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