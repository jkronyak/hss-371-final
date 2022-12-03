import React, { useEffect } from 'react';
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
        dispatch(actions.addInteraction({type: 'CLICK', target: "ADD_TO_CART_BUTTON", timestamp: Date.now(), item: item.id}));
        dispatch(actions.addItemToCart(item));
    }

    const handleRemoveFromCartClick = (itemId) => {
        console.log("Remove from Cart Clicked");
        dispatch(actions.addInteraction({type: 'CLICK', target: "REMOVE_FROM_CART_BUTTON", timestamp: Date.now(), item: itemId}));
        dispatch(actions.removeItemFromCart(itemId));
	}

	

    useEffect(() => {
		dispatch(actions.addInteraction({type: 'PAGE_VISIT', target: 'Cart', timestamp: Date.now()}));

	}, [dispatch]);

    return(
        <div>
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