import React from 'react';
import { useSelector } from 'react-redux';


import { Button } from '@mui/material';

const Home = () => { 

    const handleMouseOver = (e) => {
        console.log(e);

    }

    const handleButtonClick = (e) => { 
        console.log(e);
    }

    return(
        <div>
            <p>I am in the Home component!</p>

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