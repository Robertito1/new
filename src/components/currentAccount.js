import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const CurrentAccount = () => {
    return (
        <div className='shadow-md p-4 bg-white rounded w-11/12 sm:w-10/12 md:w-6/12 mb-4 md:mb-0'>
            <div className='flex justify-between'>
                <div>
                    <p className='primary-font text-base text-purp font-bold'>CHECKING ACCOUNT</p>
                    <p className='primary-font text-base dashboard-side-text'>PROVIDENCE BANK - 9906533917</p>
                </div>
                <div className='flex items-center px-2 h-8 rounded-full bg-purple-200 text-purple-500'>
                  <FontAwesomeIcon icon={faCreditCard} />
                </div>
            </div>
            <p className='primary-font mt-14 text-3xl text-purp font-semibold'>$84,800.
                <span className='text-xl font-medium'>
                    45
                </span>
            </p>
        </div>
    )
}

export default CurrentAccount;