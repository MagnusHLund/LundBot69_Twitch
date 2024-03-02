import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import HomePage from '../Routes/HomePage'
import SongRequestPage from '../Routes/SongRequestPage'
import GamblingPage from '../Routes/GamblingPage'
import CommandsPage from '../Routes/CommandsPage'
import Login from '../Routes/LoginPage'

import Navbar from './Navbar'
import './Layout.scss'
import Footer from '../Content/Footer'

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
          <Route path="/home" element={<HomePage />} />
          <Route path="/sr" element={<SongRequestPage />} />
          <Route path="/gambling" element={<GamblingPage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<RedirectToHome />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default Layout
