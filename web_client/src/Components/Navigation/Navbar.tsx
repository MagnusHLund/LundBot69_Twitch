import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

// Define the props interface for the Navbar component
interface NavbarProps {
  image: string
  links: { title: string; path: string; image: string }[]
}

// Define the Navbar functional component
const Navbar: React.FC<NavbarProps> = ({ image, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={image} className="lund-bot-image" alt="LundBot69 icon" />
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path}>
              <img src={link.image} alt={link.title} />
              <span>{link.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
