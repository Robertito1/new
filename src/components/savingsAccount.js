import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const SavingsAccount = () => {
    return (
        <div className='shadow-md p-4 bg-white ml: 0 md:ml-4 rounded w-11/12 sm:w-10/12 md:w-6/12'>
            <div className='flex justify-between'>
                <div>
                    <p className='primary-font text-base text-purp font-bold'>SAVINGS ACCOUNT</p>
                    <p className='primary-font text-base dashboard-side-text'>SUB ACCOUNT - 12346789</p>
                </div>
                <div className='flex items-center px-2 h-8 rounded-full bg-green-200 text-green-500'>
                <FontAwesomeIcon icon={faCreditCard} />
                </div>
            </div>
            <p className='primary-font mt-14 text-3xl text-purp font-semibold'>$390,342.
                <span className='text-xl font-medium'>
                    45
                </span>
            </p>
        </div>
    )
}

export default SavingsAccount;