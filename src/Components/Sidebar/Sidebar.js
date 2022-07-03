import React from 'react'
import './Sidebar.css'
import Logo from '../../assets/logo.png'
import Dashboard from '../../assets/Dashboard.png'
import Account from '../../assets/Account.png'
import People from '../../assets/People.png'
import Logout from '../../assets/Logout.png'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-components">
            <div className="sidebar-title">
                <img className='logo' src={Logo} alt="site logo" />
                <h1>EASY KODI</h1>
                <hr />
            </div>

            <div className="sidebar-nav">
                <ul>
                    <li><Link to="/"> <img className='nav-icon' src={Dashboard} alt="" /> DASHBOARD</Link></li>
                    <li><Link to="/tenants"> <img className='nav-icon' src={People} alt="" />TENANTS</Link></li>
                    <li><Link to="/account"> <img className='nav-icon' src={Account} alt="" />PROFILE</Link></li>
                    <li><Link to="#"> <img className='nav-icon' src={Logout} alt="" />SIGN OUT</Link></li>
                </ul>
            </div>

            <div className="sidebar-footer">
                <p>All Rights Reserved. Copyright &copy;</p>

                <div className="socials">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar