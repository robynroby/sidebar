import React from 'react'
import './Title.css'
import Profile from '../../assets/profile.jpg'
import Row from '../Row/Row'

function Title() {
  return (
    <div className='title-container'>
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
    <hr />
    <div className='dashboard-container'>
        <div className="box">
            <h3>TOTAL TENANTS</h3>
            <h4>300</h4>
        </div>
        <div className="box">
            <h3>TOTAL TENANTS</h3>
            <h4>300</h4>
        </div>
        <div className="box">
            <h3>TOTAL TENANTS</h3>
            <h4>300</h4>
        </div>
    </div>

    <div className="search-row">
        <div className="search">
        <input type="text" className='search-bar' placeholder='Search....'/>
        <button>Add New</button>
        </div>
        <div className="row">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    </div>




</div>
  )
}

export default Title