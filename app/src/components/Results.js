import React from 'react';

import { useSelector } from 'react-redux';

const Results = () => { 

    const interactions = useSelector((state) => state.data.userData.interactions);
    console.log(interactions);

    return(
        <p>I am in the Results Component.</p>
    )
}
export default Results;