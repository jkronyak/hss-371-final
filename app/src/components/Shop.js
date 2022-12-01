import React from 'react';

import { useSelector } from 'react-redux';

import { 
    Grid
} from '@mui/material';

import ShopGridItem from './ShopGridItem';

const Shop = () => {

    const shopItems = useSelector((state) => state.data.shopItems);

    return(
        <div>
            <p>I am in the Shop Component.</p>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {
                    shopItems.map((item) => {
                        return(
                            <ShopGridItem item={item} key={item.id}/>
                        )
                    })
                }
            </Grid>
        </div>
        
    )
}
export default Shop;