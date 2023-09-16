import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMagic,
    faReceipt,
    faTasks,
    faFileInvoiceDollar,
    faUsers,
    faShieldAlt
} from '@fortawesome/free-solid-svg-icons'

const DashboardSideNav = () => {
    return (
        <div className='pt-3 px-5 box-shadow flex flex-col fixed h-full w-3/12 hidden lg:block top-0 left-0 z-10'>
           <div className='flex justify-between mb-8'>
                <p className='primary-font h-10 purple rounded-full p-2 bg-black text-white font-bold'>SM</p>
                <div>
                    <p className='primary-font text-purp font-black'>Mountain Inc</p>
                    <p className='primary-font'>manage account</p>
                </div>
                <select className='h-8 outline-none w-4' name="cars" id="cars">
                    <option value="volvo"></option>
                    <option value="saab" className='font-bold primary-font text-purp cursor-pointer'>Lighter</option>
                    <option value="mercedes" className='primary-font cursor-pointer font-bold primary-font text-purp '>Mercedes Company</option>
                    <option value="audi" className='primary-font cursor-pointer font-bold primary-font text-purp '>Schneller Auto</option>
                </select>
           </div>
           <div className='primary-font text-sm dashboard-side-text flex flex-col'>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faFileInvoiceDollar} />
               {'\u00A0'} Transactions</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faUsers} />
               {'\u00A0'} Prospects</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faReceipt} />  
               {'\u00A0'} Invoice</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faTasks} />
               {'\u00A0'} Management</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faShieldAlt} />   
               {'\u00A0'} Security</p>
               <p className='cursor-pointer mb-8 hover:text-purple-900'>
               <FontAwesomeIcon icon={faMagic} /> 
               {'\u00A0'} Support</p>
           </div>
           <p className='absolute bottom-0 left-0 m-8 primary-font text-3xl dashboard-side-text'>IncomeInsight</p>
        </div>
    )
}

export default DashboardSideNav