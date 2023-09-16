import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({data}) => {
    return (
        <nav className='flex h-20 sm:h-24 w-full'>
         <div className={`${data.color} h-full w-5/12 sm:w-3/12`}>
           <p className='cursor-pointer p-4 primary-font text-white text-base sm:text-3xl z-10'>IncomeInsight</p>
         </div>
         <div className={`z-0 p-4 flex flex-col w-7/12 sm:w-9/12
           justify-start items-end text-sm sm:text-xl
            md:justify-end md:items-start md:flex-row ${data.navbarBackground}`}>
           <p className='font-semibold navbarQuestion'>{data.question}</p>
           <Link to={data.url} className='ml-1 font-semibold text-pink-600'>{data.action}</Link>
         </div>
        </nav>
    )
}

export default Navbar;