import React from 'react'
import './Tenants.css'
import '../Title/Title.css'
import Profile from '../../assets/profile.jpg'
import Row2 from '../Row/Row2'



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
            <div className="title-down">
                <h2>TENANTS</h2>
                <button>PRINT STATEMENT</button>
            </div>
        </div>
        <div className="search-row">
        <div className="search">
        <input type="text" className='search-bar' placeholder='Search....'/>
        <button>Add New</button>
        </div>
        <div className="row">
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
            <Row2 />
        </div>
    </div>
    </div>
  )
}

export default Tenants