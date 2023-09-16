import React, {useState} from 'react'
import ServiceTypeCard from './serviceTypeCard'
import {services} from '../utils/services'
import { navigate } from 'gatsby'

const SelectServiceForm = () =>{
    const [selected, setSeleced] = useState('')
    const updateSelected = (title) =>{
        setSeleced(title)
    }

    const handleSubmit = () =>{
        if(!selected){
        return alert('Please selected a service')
        }
       return navigate('/dashboard')
    }
    return (
        <div className='w-72 md:w-96 flex justify-center items-center flex-col'>
            <p className='text-2xl font-bold text-purp'>Open a business account</p>
            <p className='dashboard-side-text mb-4'>Handle your businesses with simple clicks of button</p>
            {services.map(e => <ServiceTypeCard data={e} key={e.title} selected={selected} updateSelected={updateSelected}/>)}
            <button onClick={handleSubmit} className=' rounded w-10/12 bg-pink-600 px-4 text-white h-10 
                focus:outline-none hover:text-pink-600 hover:bg-gray-400'>
                Next
            </button>
        </div>
    )
}

export default SelectServiceForm;