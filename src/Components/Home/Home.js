import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default Home