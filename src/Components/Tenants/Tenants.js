import React from 'react'
import './Tenants.css'
import '../Title/Title.css'
import Profile from '../../assets/profile.jpg'


function Tenants() {
  return (
    <div>
        <div class="title-main">
        <div class="title-txt">
            <div class="title">
                <p class="p">Apartment Name</p>
            </div>
            <div class="location">
                <p class=" loc">Location, City</p>
            </div>
        </div>

        <div className="profile">
            <div className="profile-img">
                <a href=""><img src={Profile} alt="" /></a>
            </div>
            <p>Joseph Karanja</p>
        </div>
    </div>
</div>
  )
}

export default Tenants