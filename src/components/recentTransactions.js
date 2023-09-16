import React from 'react'

const RecentTransactions = () => {
    return (
        <div className='shadow-md p-4 bg-white rounded flex justify-between w-11/12 sm:w-10/12 md:w-full'>
            <p className='primary-font text-base text-purp font-semibold'>Recent transactions</p>
            <button className='px-1 border-solid border border-pink-600 rounded-md text-pink-600'>
                See all
            </button>
        </div>
    )
}

export default RecentTransactions;