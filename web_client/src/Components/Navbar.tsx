import React from 'react'
import './Navbar.css'

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
        <img src={image} className="LundBotImage" />
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path}>
              <img src={link.image} />
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
