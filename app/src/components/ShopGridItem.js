import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
    Grid,
    Button,
    Box
} from '@mui/material';



const ShopGridItem = (props) => {
    
    const dispatch = useDispatch();

    const onViewButtonPressed = () => { 
        console.log("View Button Pressed");
        dispatch({type: "ADD_INTERACTION", payload: {type: "SHOP_ITEM_BUTTON_PRESS", timestamp: Date.now(), item: props.item.id}});
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
                width: '300px'            }}
        >  
            {/* <Box sx={{ width: '24px', height: '24px' }}> */}
                <img className="store-item-img" src={props.item.imageUrl}></img>
            {/* </Box> */}
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
            <Button variant="contained">View</Button>
        </Grid>
    )
}

export default ShopGridItem;