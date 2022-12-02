
const initialState = { 
    shopItems: [
        { id: 1, name: 'Laplop', price: 999.99, imageUrl: "https://i.imgur.com/o26wJAR.png", description: "An excellent laptop!" },
        { id: 2, name: 'Mobile Phone', price: 499.99, imageUrl: "https://i.imgur.com/wWVoCQU.png", description: 
            "This phone has everything you will ever need! Not only is it blazing fast and state of the art, it also has "+
            "a multitude of cameras, so you can take a bunch of pictures! This might not be everyone's favorite phone, but it could be yours! " },
        { id: 3, name: 'Tablet', price: 299.99, imageUrl: "https://i.imgur.com/fXoH2Ha.png", description: 
            "Now here is the perfect gift for any person. Who doesn't want a tablet? It's great for watching videos, giving "+
            "your kids when you're sick of them, or never using and hiding away in a cabinet where you'll find it again in "+
            "10 years. Tablets are the future, make sure you don't miss out!" },
        { id: 4, name: 'Headphones', price: 199.99, imageUrl: "https://i.imgur.com/4r6tcOv.png", description: 
            "Everyone needs a little peace and quiet sometimes, and these are the perfect way to do that. They have some of "+
            "the most comfortable earcups you've ever felt with an incredible lifetime of 6 months before you have to change "+
            "them. They even have noise cancelling (When you turn the volume above 60%)! Never hear distractions again!" },
        { id: 5, name: 'Keyboard', price: 99.99, imageUrl: "https://i.imgur.com/KFteM59.png", description: 
            "Everyone has a computer, but they don't have the same feel as keyboards of the past did. Return to the "+
            "golden age of letting everyone in a 50 feet radius that you're typing your entire paper that's due in "+
            "45 minutes and pick this keyboard up! Typing has never been so satsfying!" },
        { id: 6, name: 'Mouse', price: 49.99, imageUrl: "https://i.imgur.com/4tAliIZ.png", description: 
            "Comfort is key for everyone, especially when you are working on code for so long. Don't get a cheap, "+
            "uncomfortable mouse that will give you carpal tunnel! And especially don't use that tiny old trackpad, "+
            "everyone knows those are a pain to use when doing work. Choose better living today with this mouse." },
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
            copyState.userData.interactions.push(payload);
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