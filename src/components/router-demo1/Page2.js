import React from 'react';
import { useParams } from 'react-router-dom';

const Page2 = () => {
    const { id } = useParams();
    return (
        <>
            <h1>page 2</h1>
            <div>
                id : {id}
            </div>
        </>
    )
};

export default Page2;