import react, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

import { 
    Grid
} from '@mui/material';

import ShopGridItem from './ShopGridItem';

const Shop = () => {

    const dispatch = useDispatch();

	const allData = useSelector((state) => state.data);
    const shopItems = allData.shopItems;
	const shoppingCart = allData.shoppingCart;

	const handleAddToCartClick = (item) => { 
        console.log("Add to Cart Clicked");
        dispatch(actions.addInteraction({type: 'ADD_ITEM_TO_CART', timestamp: Date.now(), item: item.id}));
        dispatch(actions.addItemToCart(item));
    }

    const handleRemoveFromCartClick = (itemId) => {
        console.log("Remove from Cart Clicked");
        dispatch(actions.addInteraction({type: 'REMOVE_ITEM_FROM_CART', timestamp: Date.now(), item: itemId}));
        dispatch(actions.removeItemFromCart(itemId));
	}

	useEffect(() => {
		dispatch(actions.addInteraction({type: 'PAGE_VISIT', page: 'Shop', timestamp: Date.now()}));

	}, [dispatch]);

    return(
        <div>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {
                    shopItems.map((item) => {
                        return(
                            <ShopGridItem item={item} key={item.id} shoppingCart={shoppingCart}
								handleAddToCartClick={handleAddToCartClick}
								handleRemoveFromCartClick={handleRemoveFromCartClick}
							/>
                        )
                    })
                }
            </Grid>
        </div>
        
    )
}
export default Shop;