import React, { useState } from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

interface INavbarProps {
  image: string
  links: { title: string; path: string; image: string }[]
}

const Navbar: React.FC<INavbarProps> = ({ image, links }) => {
  const [currentPage, setCurrentPage] = useState(location.href)

  return (
    <nav className="navbar">
      <div className="navbar navbar-brand">
        <img
          src={image}
          className="navbar navbar-brand lund-bot-image"
          alt="LundBot69 icon"
        />
      </div>
      <ul className="navbar--links">
        {links.map((link, index) => (
          <li
            key={index}
            className={cn('navbar--links--option', {
              selected: currentPage.includes(link.path),
            })}
          >
            <NavLink
              to={link.path}
              onClick={() => setCurrentPage(link.path)}
              className={'navbar--links--option--container'}
            >
              <img
                src={link.image}
                alt={link.title}
                className="navbar--links--option--container__img"
              />
              <span className="navbar--links--option--container__span">
                {link.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
