import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button } from '@mui/material';
import ShopGridItem from './ShopGridItem'
import actions from '../actions';

import { v4 as uuid } from 'uuid';


const Cart = () => {
    const shopCart = useSelector((state) => state.data).shoppingCart;
    console.log(shopCart);
	const [mouseHoverTime, setMouseHoverTime] = useState(0);


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

	const handleMouseEnter = (e) => { 
		console.log("Mouse Enter");
		setMouseHoverTime(Date.now());
	}

	const handleMouseLeave = (e, target) => { 
		console.log("Mouse Leave");
		if((Date.now() - mouseHoverTime) > 500)
			dispatch(actions.addInteraction({type: 'HOVER', target: target, timestamp: Date.now(), duration: (Date.now() - mouseHoverTime)}));
	}

	const handleClick = (e, target) => { 
		console.log("Click");
		dispatch(actions.addInteraction({type: 'CLICK', target: target , timestamp: Date.now()}));
	};


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
                <div>
                    {
                        <div>
                            <h2>Subtotal: ${calcTot(shopCart).toLocaleString()}</h2>
                        </div>
                    }
                    <Link to={`/results`}>
                        <Button variant="contained" 
                        onClick={(e) => handleClick(e, 'CHECKOUT_BUTTON')}
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        onMouseLeave={(e) => handleMouseLeave(e, "CHECKOUT_BUTTON")}
                        >Checkout</Button>
                    </Link>
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
                :<div>
                    <p>Cart is empty</p>
                    <Link to={`/shop`}>
                        <Button variant="contained" 
                        onClick={(e) => handleClick(e, 'GO_TO_SHOP_BUTTON')}
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        onMouseLeave={(e) => handleMouseLeave(e, "GO_TO_SHOP_BUTTON")}
                        >Go To Shop</Button>
                    </Link>
                </div>
            }
        </div>
    )
}
export default Cart;