import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

interface INavbarProps {
  image: string
  links: { title: string; path: string; image: string }[]
}

const Navbar: React.FC<INavbarProps> = ({ image, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar navbar-brand">
        <img
          src={image}
          className="navbar navbar-brand lund-bot-image"
          alt="LundBot69 icon"
        />
      </div>
      <ul className="navbar navbar-links">
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
