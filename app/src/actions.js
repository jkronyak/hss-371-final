const addInteraction = (interaction) => ({
    type: 'ADD_INTERACTION',
    payload: interaction
});

const addItemToCart = (cartItem) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem
});

module.exports = { 
    addInteraction,
    addItemToCart
};