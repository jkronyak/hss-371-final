import React from 'react';

import { useSelector } from 'react-redux';

const Results = () => { 

    const allData = useSelector((state) => state.data);
    console.log(allData);
    // const interactions = useSelector((state) => state.data.userData.interactions);
    // console.log(interactions);
    // const currentShoppingCart = useSelector((state) => state.data.shoppingCart);
    // console.log(currentShoppingCart);

    return(
        <p>I am in the Results Component.</p>
    )
}
export default Results;