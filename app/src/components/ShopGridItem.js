import React from 'react';
import { Link } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';
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
                width: '300px'            
            }}
        >  
            <img className="store-item-img" src={props.item.imageUrl}></img>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <Button variant="contained" onClick={() => onViewButtonPressed()}>View</Button>
        </Grid>
    )
}

export default ShopGridItem;