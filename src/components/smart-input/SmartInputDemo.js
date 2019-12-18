import React from 'react';
import SmartInput from './SmartInput';

const SmartInputDemo = () => {

    const handleInputChange = (newValue) => {
        console.log(newValue);
    };

    return (<div className="smart-input-demo">
        <h1>Smart Input Demo</h1>
        <hr />
        <SmartInput initialValue="hello" onChange={handleInputChange} />
    </div>)
};

export default SmartInputDemo;