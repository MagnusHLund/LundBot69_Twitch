// Layout.js
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from '../Routes/Home'
import SongRequest from '../Routes/SongRequest'
import Gambling from '../Routes/Gambling'
import Commands from '../Routes/Commands'

import Navbar from './Navbar'
import './Layout.scss'

const RedirectToHome: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [navigate])

  return null
}

const Layout: React.FC = () => {
  const navLinks = [
    { title: 'Home', path: '/home', image: '/Home.png' },
    { title: 'Song request', path: '/sr', image: '/SongRequest.png' },
    { title: 'gambling', path: '/gambling', image: '/Gambling.png' },
    { title: 'Commands', path: '/commands', image: '/Commands.png' },
  ]

  return (
    <>
      <Navbar image="/LundBot69_Icon.png" links={navLinks} />
      <div className="site">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sr" element={<SongRequest />} />
          <Route path="/gambling" element={<Gambling />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="*" element={<RedirectToHome />} />
        </Routes>
      </div>
    </>
  )
}

export default Layout
