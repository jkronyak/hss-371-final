import { v4 as uuid } from 'uuid';

const initialState = { 
    shopItems: [
        { id: uuid(), name: 'Laplop', price: 999.99, imageUrl: "https://i.imgur.com/o26wJAR.png" },
        { id: uuid(), name: 'Mobile Phone', price: 499.99, imageUrl: "https://i.imgur.com/wWVoCQU.png" },
        { id: uuid(), name: 'Tablet', price: 299.99, imageUrl: "https://i.imgur.com/fXoH2Ha.png" },
        { id: uuid(), name: 'Headphones', price: 199.99, imageUrl: "https://i.imgur.com/4r6tcOv.png" },
        { id: uuid(), name: 'Keyboard', price: 99.99, imageUrl: "https://i.imgur.com/KFteM59.png" },
        { id: uuid(), name: 'Mouse', price: 49.99, imageUrl: "https://i.imgur.com/4tAliIZ.png" },
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
        default: 
            return state;
    }

};

export default dataReducer;