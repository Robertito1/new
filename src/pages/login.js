import React from 'react'
import FormSection from '../components/formSection'
import LoginForm from '../components/loginForm'
import Navbar from '../components/navbar'

const Login = () => {
    const data = {
      color: 'purple',
      question: 'Don\'t have an account?',
      action: 'Sign Up',
      url: '/signup',
      navbarBackground: 'navbarBackgroundPurple'
    }
    return (
        <div>
          <Navbar data={data}/>
          <FormSection color={data.color}> 
            <LoginForm />
          </FormSection> 
        </div>
    )
}

export default Login;