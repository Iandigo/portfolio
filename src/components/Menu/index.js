import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

const Menu = ({ onToggle }) => {
  return (
    <menu className="main-menu">
      <nav className="main-menu-nav" onClick={onToggle}>
        <NavLink className="home-link" to="/">
          Home
        </NavLink>
        <NavLink className="about-link" to="/about">
          About
        </NavLink>
        <NavLink className="portfolio-link" to="/portfolio">
          Works
        </NavLink>
        <NavLink className="contact-link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </menu>
  )
}

export default Menu
