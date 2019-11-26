import React from 'react';
import PropTypes from 'prop-types';

const Decrementor = ({onDecrement}) => {

    const [decrementCount, setDecrementCount] = React.useState(0);

    const handleClick = () => {
        setDecrementCount(decrementCount + 1);
        onDecrement();
    }
    return (
    <div>
        <button onClick={handleClick}>less (clicked {decrementCount} times)</button>
    </div>
    );
};

Decrementor.propTypes = {
    onDecrement : PropTypes.func.isRequired
};

export default Decrementor;