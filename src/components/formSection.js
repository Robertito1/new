import React from 'react';
import Dashes from './dashes';
import bank from '../images/bank.png'
import coin from '../images/coin.png'

const FormSection = ({color, children}) => {
    return (
        <div className='flex h-screen w-full'>
          <div className={`p-4 text-white ${color} w-3/12 hidden lg:block`}>
           <Dashes />   
           <p className='text-4xl'>Create multiple sub-accounts</p>
           <p className='text-lg mb-14'>Organise your business finances easily with multiple accounts. No limits</p>
           <div>
               <img src={coin} alt='coin' className='h-8 float-right mb-8 mr-4 transform -rotate-45'/>
               <img src={coin} alt='coin' className='h-6 transform mt-24 ml-40 -rotate-90'/>
               <img src={bank} alt='bank' />
               <img src={coin} alt='coin' className='h-4 transform -mb-14 ml-24 rotate-12'/>
               <img src={coin} alt='coin' className='h-6 transform ml-24 -rotate-45'/>
           </div>
          </div>
          <div className='w-full lg:w-9/12 flex justify-center mt-32'>
            {children}
          </div>
         
       </div>
    )
}

export default FormSection;