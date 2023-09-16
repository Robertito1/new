import React from 'react'
import FormSection from '../components/formSection'
import Navbar from '../components/navbar'
import SelectServiceForm from '../components/selectServiceForm'

const SelectService = () => {
  const data = {
    color: 'cyan',
    question: 'Already a member?',
    action: 'Sign in',
    url: '/',
    navbarBackground: 'navbarBackgroundCyan'
  }
    return (
      <div>
        <Navbar data={data}/>
        <FormSection color={data.color}> 
          <SelectServiceForm />
        </FormSection>    
      </div>
    )
}

export default SelectService;