import { v4 as uuid } from 'uuid';

const initialState = { 
    items: [
        { id: uuid(), name: 'Laplop', price: 999.99 },
        { id: uuid(), name: 'Mobile', price: 499.99 },
        { id: uuid(), name: 'Tablet', price: 299.99 },
        { id: uuid(), name: 'Headphones', price: 199.99 },
        { id: uuid(), name: 'Keyboard', price: 99.99 },
        { id: uuid(), name: 'Mouse', price: 49.99 }
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
        
    }

};

export default dataReducer;