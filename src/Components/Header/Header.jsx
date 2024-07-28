import React from 'react'
import {NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <div className='container header-container'>
        <ul className='header-list'>
          <li className='header-item'>

          <NavLink className='header-link'  active to="/" >
          <strong>Cities</strong>
          </NavLink>
          
          </li>
          <li className='header-item'>

          <NavLink className='header-link'  active to="/images">
          <strong>Images</strong>
          </NavLink>
          
          </li>
          <li className='header-item'>

          <NavLink className='header-link'  active to="/posts">
          <strong>Posts</strong>
          </NavLink>
          
          </li>
        </ul>

      </div>
      
    </div>
  )
}

export default Header
