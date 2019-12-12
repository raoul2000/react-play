import React from 'react';

import LoginForm from './LoginForm';

const DemoForm2 = () => {

    const handleSubmit = (formValue) => console.log(formValue);

    return (
        <div>
            <h1>Demo Form2 : Formik</h1>
            <hr />
            <LoginForm onSubmit={handleSubmit} />
        </div>

    );
};

export default DemoForm2;