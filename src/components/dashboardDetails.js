import React from 'react';
import CashOutflow from './cashOutflow';
import CurrentAccount from './currentAccount';
import MonthSummary from './monthSummary';
import RecentTransactions from './recentTransactions';
import SavingsAccount from './savingsAccount';


const DashboardDetails = () => {
    return (
        <div className='p-1 pb-12 md:p-12 w-full offwhite-background'>
           <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-6'>
               <div className='w-full md:w-8/12 '>
                    <p className='mt-8 primary-font text-xl md:text-2xl text-purp font-bold text-center md:text-left'>Welcome back Sandy</p>
                    <p className='primary-font px-8 sm:px-0 text-0.5 md:text-xl text-purp font-semibold text-center md:text-left'>
                        Here's what has been happening in the last
                        <span className='ml-1 text-pink-600 underline cursor-pointer'>
                        7 days
                        </span>
                    </p>
               </div>
               <button className='rounded bg-pink-600 px-4 text-white text-sm mt-12 md:mt-0  md:text-base h-10 w-32 sm:w-56 focus:outline-none'>
                   Add a sub account
               </button>
           </div>
           <div className='flex flex-col md:flex-row items-center mb-6'>
                <CurrentAccount />
                <SavingsAccount />
           </div>
           <div className='flex flex-col md:flex-row items-center mb-6'>
                <MonthSummary />
                <CashOutflow />
           </div>
           <div className='flex justify-center'>
               <RecentTransactions />
           </div> 
        </div>
    )
}

export default DashboardDetails