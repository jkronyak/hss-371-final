import { v4 as uuid } from 'uuid';

const initialState = { 
    shopItems: [
        { id: 1, name: 'Laplop', price: 999.99, imageUrl: "https://i.imgur.com/o26wJAR.png" },
        { id: 2, name: 'Mobile Phone', price: 499.99, imageUrl: "https://i.imgur.com/wWVoCQU.png" },
        { id: 3, name: 'Tablet', price: 299.99, imageUrl: "https://i.imgur.com/fXoH2Ha.png" },
        { id: 4, name: 'Headphones', price: 199.99, imageUrl: "https://i.imgur.com/4r6tcOv.png" },
        { id: 5, name: 'Keyboard', price: 99.99, imageUrl: "https://i.imgur.com/KFteM59.png" },
        { id: 6, name: 'Mouse', price: 49.99, imageUrl: "https://i.imgur.com/4tAliIZ.png" },
    ],
    userData: { 
        interactions: [ ],
        cartChangeEvents: [ ],
        otherInfo: { }
    },
    shoppingCart: [ ]
};

let copyState = null;
let index = 0;

const dataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) { 
        case 'ADD_INTERACTION':
            copyState = { ...state };
            console.log(payload);
            copyState.userData.interactions.push(payload);
            console.log(copyState);
            return copyState;
        case 'ADD_ITEM_TO_CART':
            copyState = { ...state };
            copyState.shoppingCart.push(payload);
            return copyState;
        case 'REMOVE_ITEM_FROM_CART':
            copyState = { ...state };
            index = copyState.shoppingCart.findIndex((item) => item.id === payload);
            copyState.shoppingCart.splice(index, 1);
            return copyState;
        default: 
            return state;
    }

};

export default dataReducer;