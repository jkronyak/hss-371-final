import react from 'react';

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
        dispatch(actions.addItemToCart(item));
    }

    const handleRemoveFromCartClick = (itemId) => {
        console.log("Remove from Cart Clicked");
        dispatch(actions.removeItemFromCart(itemId));
	}



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