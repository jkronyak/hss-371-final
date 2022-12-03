import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../actions';

import { Button } from '@mui/material';

const Home = () => { 
    const dispatch = useDispatch();

	// dispatch(actions.addInteraction({type: 'PAGE_VISIT', page: 'Home', timestamp: Date.now()}));

    const handleMouseOver = (e) => {
        console.log(e);
        dispatch(actions.addInteraction({type: "HOME_PAGE_MOUSE_HOVER", timestamp: Date.now()}));

    }

    const handleButtonClick = (e) => { 
        console.log(e);
        dispatch(actions.addInteraction({type: "HOME_PAGE_BUTTON_CLICK", timestamp: Date.now()}));
    }

    useEffect(() => {
		dispatch(actions.addInteraction({type: 'PAGE_VISIT', page: 'Home', timestamp: Date.now()}));

	}, [dispatch]);

    return(
        <div>
            <p>Welcome to our website! Here, you can shop the goods that we are currently offering.</p>
            <p onMouseOver={() => console.log("Hovered")}>Hover over me!</p>

            <p onMouseOver={(e) => handleMouseOver(e)}>Hover over me!</p>
            
            <p 
                onMouseUp={() => dispatch(actions.addInteraction({type: 'MOUSE_UP_SELECTION', timestamp: Date.now(), selection: window.getSelection().toString()}))}
                onDoubleClick={() => dispatch(actions.addInteraction({type: 'DOUBLE_CLICK_SELECTION', timestamp: Date.now(), selection: window.getSelection().toString()}))}
            >
                Highlight me!
            </p>
            
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