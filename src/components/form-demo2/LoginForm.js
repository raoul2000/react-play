import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const LoginForm = ({ onSubmit }) => {
    /*
        const validate = (values) => {
            const errors = {};
            if (!values.name || values.name.trim().length === 0) {
                errors.name = "name is required";
            }
            if (!values.password || values.password.trim().length === 0) {
                errors.password = "password is required";
            }
            return errors;
        };
    */
    const validationSchema = Yup.object({
        name: Yup.string().max(10).required('Required'),
        password: Yup.string().max(15).required('Required')

    });
    const formik = useFormik({
        'initialValues': {
            name: '',
            password: ''
        },
        //validate,
        validationSchema,
        'onSubmit': onSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                autoComplete="off"
            />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                autoComplete="off"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;