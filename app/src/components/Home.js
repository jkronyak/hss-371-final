import React from 'react';

const Home = () => { 

    return(
        <div>
            <p onMouseOver={() => console.log("FOCUSED")}>I am in the Home component!</p>
        </div>
    )

}

export default Home;