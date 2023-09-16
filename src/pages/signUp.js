import React from 'react'
import FormSection from '../components/formSection'
import Navbar from '../components/navbar'
import SignUpForm from '../components/signUpForm'

const SignUp = () => {
  const data = {
    color: 'cyan',
    question: 'Already a member?',
    action: 'Sign In',
    url: '/',
    navbarBackground: 'navbarBackgroundCyan'
  }
    return (
        <div>
          <Navbar data={data}/>
          <FormSection color={data.color}> 
            <SignUpForm />
          </FormSection>   
        </div>
    )
}

export default SignUp;