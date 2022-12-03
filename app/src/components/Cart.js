import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from '@mui/material';
import ShopGridItem from './ShopGridItem'
import actions from '../actions';

const Cart = () => {
    const shopCart = useSelector((state) => state.data).shoppingCart;
    console.log(shopCart);


    const dispatch = useDispatch();

    const handleAddToCartClick = (item) => { 
        console.log("Add to Cart Clicked");
        dispatch(actions.addItemToCart(item));
    }

    const handleRemoveFromCartClick = (itemId) => {
        console.log("Remove from Cart Clicked");
        dispatch(actions.removeItemFromCart(itemId));
	}

    return(
        <div>
            <p>I'm the Cart Component</p>
            <List sx={{maxWidth: '40%', marginLeft: 'auto', marginRight: 'auto', padding: '12px'}}>
                {
                shopCart.map((item) => {
                    return(
                        <div key={item.id}>
                            <ShopGridItem item={item} key={item.id} shoppingCart={shopCart}
                                handleAddToCartClick={handleAddToCartClick}
                                handleRemoveFromCartClick={handleRemoveFromCartClick}
                            />
                        </div>
                    )
                })
                }
            </List>
        </div>
    )
}
export default Cart;