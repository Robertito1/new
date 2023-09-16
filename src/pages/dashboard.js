import React, {useState} from 'react'
import DashboardSideNav from '../components/dashboardSideNav';
import DashboardNav from '../components/dashboardNav'
import DashboardDetails from '../components/dashboardDetails';
import SideDraw from '../components/sidedraw';
const Dashboard = () => {
    
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
    const handleOpenDrawer = () =>{
        setSideDrawerOpen(sideDrawerOpen => !sideDrawerOpen)
    }
    return (
        <div>
          <SideDraw handleOpenDrawer={handleOpenDrawer} open={sideDrawerOpen} />
          <DashboardSideNav />
          <div className='w-full lg:w-9/12 lg:float-right z-0'>
              <DashboardNav handleOpenDrawer={handleOpenDrawer}/>
              <DashboardDetails />
          </div>
        </div>
    )
}

export default Dashboard;