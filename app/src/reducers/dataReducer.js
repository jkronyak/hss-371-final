import { v4 as uuid } from 'uuid';

const initialState = { 
    shopItems: [
        { id: uuid(), name: 'Laplop', price: 999.99, imageUrl: "" },
        { id: uuid(), name: 'Mobile', price: 499.99, imageUrl: "" },
        { id: uuid(), name: 'Tablet', price: 299.99, imageUrl: "" },
        { id: uuid(), name: 'Headphones', price: 199.99, imageUrl: "" },
        { id: uuid(), name: 'Keyboard', price: 99.99, imageUrl: "" },
        { id: uuid(), name: 'Mouse', price: 49.99, imageUrl: "" },
    ],
    userData: { 
        interactions: [ ],
        cartChangeEvents: [ ],
        otherInfo: { }
    }
};

let copyState = null;
let index = 0;

const dataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) { 
        case 'ADD_INTERACTION':
            copyState = { ...state };
            copyState.userData.interactions.push(payload);
            return copyState;
        default: 
            return state;
    }

};

export default dataReducer;