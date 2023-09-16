import React from 'react'
import Spendometer from './spendometer'
import { bankFees, marketing, internet, transfers } from '../utils/icons'

const CashOutflow = () => {
    return (
        <div className='shadow-md ml-0 md:ml-4 p-4 bg-white rounded w-11/12 sm:w-10/12 md:w-5/12'>
            <p className='primary-font text-base text-purp font-bold mb-8'>Cash outflow</p>
            <Spendometer item='Bank Fees' progress='w-11/12' icon={bankFees}/>
            <Spendometer item='Internet' progress='w-8/12' icon={internet}/>
            <Spendometer item='Marketing' progress='w-4/12' icon={marketing}/>
            <Spendometer item='Transfer' progress='w-3/12' icon={transfers}/>
        </div>
    )
}

export default CashOutflow;