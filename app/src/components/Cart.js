import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import ShopGridItem from './ShopGridItem'

const Cart = () => {
    const shopCart = useSelector((state) => state.data.shoppingCart);
    console.log(shopCart);

    return(
        <div>
            <p>I'm the Cart Component</p>
            <List>
                {
                shopCart.map((item) => {
                    return(
						<p>Fuck youS</p>
                    )
                })
                }
            </List>
        </div>
    )
}
export default Cart;