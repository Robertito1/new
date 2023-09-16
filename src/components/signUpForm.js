import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { navigate } from 'gatsby'
import * as yup from 'yup';



const SignUpForm = () =>{
    return (
        <div className='w-72 sm:w-80 mb-24'>
            <p className='text-2xl text-purp font-bold'>Create your account</p>
            <p className='dashboard-side-text mb-6'>There are various account types to choose from</p>
            <Formik
                initialValues={{ firstName: '', lastName: '', number: '', email: '', password: '' }}
                validationSchema={yup.object({
                firstName: yup.string().min(3, 'Name is too short')
                .required('Firstname is required'),
                lastName: yup.string().min(3, 'Name is too short')
                .required('Lastname is required'),
                number: yup.number().min(9, 'Number is too short')
                .required('Phonenumber is required'),
                email: yup.string().email()
                .required('Email is required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    navigate('/select-service')
                    setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col'>
                    <div className='mb-6'>
                        <Field 
                            type="text" 
                            name="firstName" 
                            className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                            placeholder='Firstname'
                            />
                        <ErrorMessage name="firstName" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <div className='mb-6'>
                        <Field 
                          type="text"
                          name="lastName"
                          className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                          placeholder='Lastname'
                        />
                        <ErrorMessage name="lastName" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <div className='mb-6'>
                        <Field
                            type="number"
                            name="number"
                            className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                            placeholder='Phonenumber'
                        />
                        <ErrorMessage name="number" component="div" className='text-red-700 text-sm'/>
                    </div> 
                    <div className='mb-6'>
                        <Field 
                          type="email" 
                          name="email"
                          className='w-full input-shadow border-none rounded-md offwhite-background p-3 h-10 outline-none'
                          placeholder='Email'
                           />
                        <ErrorMessage name="email" component="div" className='text-red-700 text-sm'/>
                    </div>
                    <button type="submit" 
                    disabled={isSubmitting} 
                    className='rounded bg-pink-600 px-4 text-white h-10  focus:outline-none hover:text-pink-600 hover:bg-gray-400'>
                        Next
                    </button>
                    </Form>
                )}
            </Formik>
    </div>
    )
}

export default SignUpForm;