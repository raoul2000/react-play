import React, { useState } from 'react';
import propTypes from 'prop-types';

const LoginForm = ({ name = '', onSubmit }) => {

    const [inputName, setName] = useState(name);
    const [inputPassword, setPassword] = useState(null);

    const handleSubmit = (ev) => {
        console.log('handleSubmit');
        ev.preventDefault();

        // validate inputs

        // on success
        onSubmit({ name: inputName, password: inputPassword });

    };

    const handleNameChange = (ev) => {
        console.log(ev.target.value);
        setName(ev.target.value);
    };

    const handlePasswordChange = (ev) => {
        console.log(ev.target.value);
        setPassword(ev.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom : <input type="text" name="name" onChange={handleNameChange} autoComplete="off" value={inputName} />
            </label>
            <label>
                password : <input type="password" name="password" onChange={handlePasswordChange} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

LoginForm.propTypes = {
    name: propTypes.string,
    onSubmit: propTypes.func.isRequired
};

export default LoginForm;