import React from 'react';

const Home = () => { 




    return(
        <div>
            <p>I am in the Home component!</p>

            <p onMouseOver={() => console.log("Hovered")}>Hover over me!</p>
            
            <p 
                onMouseUp={() => console.log("Mouse Up Selection: ", window.getSelection().toString())}
                onDoubleClick={() => console.log("Double Click Selection: ", window.getSelection().toString())}
            >
                Highlight me!
            </p>

            <p onClick={() => console.log("Clicked")}>Click me!</p>
            

        </div>
    )

}

export default Home;