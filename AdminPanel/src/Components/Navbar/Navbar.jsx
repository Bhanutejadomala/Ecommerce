import React from 'react'
import './Navbar.css'
import navlogo from '../../Assets/adminlogo.png'
import profilelogo from '../../Assets/profile.jpeg'


const Navbar = () => {
  return (
    <div className='navbar'>
       <img src={navlogo} alt='' className='navlogo'/>
       <h1>Admin Panel</h1>
       <img src={profilelogo} alt=''  className='profilelogo'/>
    </div>
  )
}

export default Navbar
