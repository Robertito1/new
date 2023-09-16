import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ServiceTypeCard = ({data, selected, updateSelected}) => {
    const showingBenefits = selected !== data.title ? 'hidden' : null
    const showingSelect = selected !== data.title ? 'bg-gray-200' : 'bg-pink-600'
    const showingBox = selected !== data.title ? 'border-none': 'border border-solid border-pink-600'
    const toggle = () =>{
        updateSelected(data.title)
    }
    return (
        <div className={`${showingBox} flex justify-center items-top shadow-lg bg-white rounded w-10/12 mb-6`}>
            <div className={` ${showingSelect} rounded-full shadow h-2 w-2  p-2 mt-1 mx-2`}>
               
            </div>
            <div onClick={toggle} className='w-96'>
                <p className='font-bold text-purp'>{data.title}</p>
                <div className={`${showingBenefits}`}>
                    <p className='dashboard-side-text text-sm primary-font'>{data.description}</p>
                    {data.offers.map((e) =>
                    <div className='flex items-center' key={e}>                      
                        <FontAwesomeIcon icon={faCheck} color='green'/>  {'\u00A0'}                         
                        <p className='dashboard-side-text text-sm primary-font'>{e}</p>                    
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ServiceTypeCard;
