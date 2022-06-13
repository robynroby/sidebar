import React from 'react'
import './Dashboard.css'
import Profile from '../../assets/profile.jpg'

function Dashboard() {
  return (
    <div class="dashboard-main">
        <div class="dashboard-txt">
            <div class="title">
                <p class="p">Apartment Name</p>
            </div>
            <div class="location">
                <p class=" loc">Location, City</p>
            </div>
        </div>

        <div className="profile">
            <a href=""><img src={Profile} alt="" /></a>
            <p>Joseph Karanja</p>
        </div>
</div>
  )
}

export default Dashboard