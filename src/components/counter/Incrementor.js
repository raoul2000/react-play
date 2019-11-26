import React from 'react';
import PropTypes from 'prop-types';

const Incrementor =  ({ onIncrement }) => {

    const [incrementCount, setIncrementCount] = React.useState(0);

    const handleClick = () => {
        setIncrementCount(incrementCount + 1);
        onIncrement();
    }
    return (
    <div>
        <button onClick={handleClick}>more (clicked {incrementCount} times)</button>
    </div>
    );
}

Incrementor.propTypes = {
    onIncrement : PropTypes.func.isRequired
};


export default Incrementor;