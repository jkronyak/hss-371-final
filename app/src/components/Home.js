import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../actions';

import { Button } from '@mui/material';

const Home = () => { 
    const dispatch = useDispatch();
    const handleMouseOver = (e) => {
        console.log(e);
        dispatch(actions.addInteraction({type: "HOME_PAGE_MOUSE_HOVER", timestamp: Date.now(), item: null}));

    }

    const handleButtonClick = (e) => { 
        console.log(e);
        dispatch(actions.addInteraction({type: "HOME_PAGE_BUTTON_PRESS", timestamp: Date.now(), item: null}));
    }

    return(
        <div>
            <p>I am in the Home component!</p>
            <p>Welcome to our website! Here, you can shop the goods that we are currently offering.</p>
            <p onMouseOver={() => console.log("Hovered")}>Hover over me!</p>

            <p onMouseOver={(e) => handleMouseOver(e)}>Hover over me!</p>
            
            <p 
                onMouseUp={() => console.log("Mouse Up Selection: ", window.getSelection().toString())}
                onDoubleClick={() => console.log("Double Click Selection: ", window.getSelection().toString())}
            >
                Highlight me!
            </p>

            <p onClick={() => console.log("Clicked")}>Click me!</p>
            
            <Button 
                variant="contained"
                onClick={(e) => handleButtonClick(e)}
            >
                Click Me!
            </Button>

        </div>
    )

}

export default Home;