import React from 'react';

import {
    Grid
} from '@mui/material';

const ShopGridItem = (props) => {
    return(
        <Grid item xs={4}>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
        </Grid>
    )
}

export default ShopGridItem;