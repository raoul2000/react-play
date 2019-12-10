import React from 'react';
import LoginForm from './LoginForm';

const FormDemo1 = () => {
    const handleFormSumit = (credentials) => {
        console.log('handleFormSumit', credentials);
    }
    return (
        <>
            <h1>FormDemo1</h1>
            <hr />
            <LoginForm onSubmit={handleFormSumit} />
        </>
    );
}

export default FormDemo1;