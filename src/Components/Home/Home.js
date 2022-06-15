import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Title from '../Title/Title'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
        <Sidebar />
        <Title />
    </div>
  )
}

export default Home