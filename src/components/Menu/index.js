import React from 'react'
import './index.scss'

const Menu = () => {
  return (
    <menu className="main-menu">
      <nav className="main-menu-nav">
        <a className="home-link" href="/">
          Home
        </a>
        <a className="about-link" href="/about">
          About
        </a>
        <a className="portfolio-link" href="/portfolio">
          Works
        </a>
        <a className="contact-link" href="/contact">
          Contact
        </a>
      </nav>
    </menu>
  )
}

export default Menu
