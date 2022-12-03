import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from '@mui/material';
import ShopGridItem from './ShopGridItem'
import actions from '../actions';

import { v4 as uuid } from 'uuid';


const Cart = () => {
    const shopCart = useSelector((state) => state.data).shoppingCart;
    console.log(shopCart);


    const dispatch = useDispatch();

	const handleAddToCartClick = (item) => { 
        console.log("Add to Cart Clicked");
        dispatch(actions.addInteraction({type: 'CLICK', target: 'ADD_ITEM_TO_CART', timestamp: Date.now(), item: item.name}));
        dispatch(actions.addItemToCart(item));
    }

    const handleRemoveFromCartClick = (item) => {
        console.log("Remove from Cart Clicked");
        dispatch(actions.addInteraction({type: 'CLICK', target: 'REMOVE_ITEM_FROM_CART', timestamp: Date.now(), item: item.name}));
        dispatch(actions.removeItemFromCart(item.id));
	}

    const calcTot = (cart) => {
        let tot = 0;
        cart.forEach(function (elem) {
            tot += elem.price;
        });
        return tot;
    }

    useEffect(() => {
		const visitId = uuid();

		dispatch(actions.addInteraction({id: visitId, type: 'PAGE_VISIT', target: 'CART', timestamp: Date.now()}));
		return () => { 
			dispatch(actions.editInteractionDuration({id: visitId, timestamp: Date.now()}));
		}
	}, [dispatch]);

    return(
        <div>
            {
                shopCart.length ?
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
                    {
                        <div>
                            <h2>Subtotal: ${calcTot(shopCart)}</h2>
                        </div>
                    }
                </List>
                :<p>Cart is empty</p>
            }
        </div>
    )
}
export default Cart;