import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Hamburger from './hamburger'
import user from '../images/user.png'

const DashboardNav = ({handleOpenDrawer}) => {
    return (
        <nav className='px-1 md:px-12 flex h-20 md:h-24 justify-between items-center'>
            <p className='primary-font dashboard-side-text text-base sm:text-3xl'>Dashboard</p>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faBell} className='h-6 border-solid border w-6'/>
              <img src={user} className='h-8 ml-2 rounded-full' alt='user'/>
              <Hamburger handleOpenDrawer={ handleOpenDrawer}/>
            </div>
        </nav>
    )
}

export default DashboardNav
