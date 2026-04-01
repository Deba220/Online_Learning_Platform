import React from 'react'
import './Navbar.css'

import logo_light from '../src/assets/logo.png'
import search_icon_light from '../src/assets/search-w.png'
import profile from '../src/assets/profile-user.png'
import menuIcon from '../src/assets/menu.png'

const Navbar = ({ onPageChange }) => {
  return (
    <div className='navbar'>
      <img src={logo_light} alt="" className='logo' />
      <h3 className='logo-text'>Learn Z</h3>
      <ul>
        <li><a href="#" onClick={() => onPageChange('Home')}>Home</a></li>
        <li><a href="#" onClick={() => onPageChange('Courses')}>Courses</a></li>
        <li><a href="#" onClick={() => onPageChange('Assignment')}>Assignment</a></li>
        <li><a href="#" onClick={() => onPageChange('Resource')}>Resource</a></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder='Search' />
        <img src={search_icon_light} alt="" />
      </div>

      <img src={menuIcon} alt="" className='menuIcon' />
      <a href="#" onClick={() => onPageChange('Profile')}>
        <img src={profile} alt="" className='profile' />
      </a>
      
    </div>
  )
}

export default Navbar
