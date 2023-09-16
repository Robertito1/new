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
import Hamburger from './hamburger'

const SideDraw = ({handleOpenDrawer, open}) => {

    const showSideDrawer = open ? 'transform translate-x-0' : '-translate-x-full';
    return (
        <div className= {`transition duration-500 ease-in-out transform pt-10 px-5 flex flex-col fixed cyan h-full w-full z-10 ${showSideDrawer} lg:hidden`}>
           <div className='flex justify-between mb-8'>
                <p className='primary-font h-10 purple rounded-full p-2 bg-black text-white font-bold'>SM</p>
                <div>
                    <p className='primary-font text-purp font-black'>Mountain Inc</p>
                    <p className='primary-font'>manage account</p>
                </div>
                <select className='h-8 outline-none w-4' name="cars" id="cars">
                    <option value="volvo"></option>
                    <option value="saab" className='font-bold primary-font text-purp cursor-pointer'>Lighter</option>
                    <option value="mercedes" className='primary-font cursor-pointer font-bold primary-font text-purp'>Mercedes Company</option>
                    <option value="audi" className='primary-font cursor-pointer font-bold primary-font text-purp '>Schneller Auto</option>
                </select>
                <Hamburger handleOpenDrawer={ handleOpenDrawer } />
           </div>
           <div className='primary-font text-sm text-purp flex flex-col items-center'>
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

export default SideDraw;