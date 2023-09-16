import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { navigate } from 'gatsby'
import * as yup from 'yup';


const LoginForm = () =>{
    return (  
        <div className='w-72 sm:w-80 mb-24'>
            <p className='text-2xl font-bold text-purp'>Welcome back to IncomeInsight</p>
            <p className='dashboard-side-text mb-6'>An account wih powerful, personalized tools all in one place</p>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={yup.object({
                email: yup.string().email()
                .required('Email is required'),
                password: yup.string().required('Password is required')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        navigate('/dashboard')
                    setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col'>
                    <div className='mb-6'>
                        <Field 
                          type="email" 
                          name="email"
                          className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                          placeholder='Email'
                           />
                        <ErrorMessage name="email" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <div className='mb-6'>
                        <Field 
                          type="password" 
                          name="password"
                          className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                          placeholder='Password'
                           />
                        <ErrorMessage name="password" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <button type="submit" disabled={isSubmitting} 
                    className='rounded bg-pink-600 px-4 text-white h-10 
                    focus:outline-none hover:text-pink-600 hover:bg-gray-400'>
                        Next
                    </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;