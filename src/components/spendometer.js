import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Spendometer = ({item, progress, icon}) => {
    return (
        <div className='flex items-center justify-between mb-8'> 
            <FontAwesomeIcon icon={icon.component} className={`${icon.style}`}/>
            <p className='dashboard-side-text text-sm'>{item}</p>
            <div>
                <p className='text-purp font-semibold text-sm'>$250,000</p>
                <div className='rounded h-2 w-40 bg-gray-400'>
                    <div className={`rounded h-2 ${progress} bg-yellow-400`}></div>
                </div>
            </div>   
        </div>
    )
}

export default Spendometer;