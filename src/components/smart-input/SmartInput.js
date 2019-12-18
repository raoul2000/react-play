import React from 'react';
import propTypes from 'prop-types';

const SmartInput = ({ initialValue = "", onChange }) => {

    const [inputValue, setInputValue] = React.useState(initialValue);
    const [editMode, setEditMode] = React.useState(false);

    const handleBlur = (ev) => {
        console.log('blur');
        setEditMode(false);
        onChange(inputValue);
    };

    const handleFocus = (ev) => {
        console.log('handleFocus');
        setEditMode(true);
    };

    const handleChange = (ev) => {
        setInputValue(ev.target.value);
    };

    return (
        <div className="smart-input" onClick={handleFocus} >
            {
                editMode
                    ? <input
                        autoFocus={true}
                        type="text"
                        value={inputValue}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    : <span>{inputValue}</span>
            }
        </div>
    );
};

SmartInput.propTypes = {
    initialValue: propTypes.string,
    onChange: propTypes.func.isRequired
}

export default React.memo(SmartInput);