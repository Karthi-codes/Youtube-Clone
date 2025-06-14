import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/youtube.png'
import search_icon from '../../assets/search.png'
import upload_Icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div' id='hello'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => setSidebar(pre => pre === false ? true : false)} src={menu_icon} alt="" />
        <Link to="/"><img className='logo' src={logo} alt="" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="search" placeholder='Search Here' />
          <img className='search-icon' src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_Icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='profile-icon' alt="" />

      </div>
    </nav>
  )
}

export default Navbar