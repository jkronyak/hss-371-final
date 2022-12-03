const addInteraction = (interaction) => ({
    type: 'ADD_INTERACTION',
    payload: interaction
});

const addItemToCart = (cartItem) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem
});

const removeItemFromCart = (itemId) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: itemId
});

const editInteractionDuration = (data) => ({
	type: 'EDIT_INTERACTION_DURATION',
	payload: {id: data.id, timestamp: data.timestamp}
});

module.exports = { 
    addInteraction,
    addItemToCart, 
    removeItemFromCart,
	editInteractionDuration
};