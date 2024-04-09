import { Routes, Route, useNavigate } from 'react-router-dom'

import HomePage from '../Routes/HomePage'
import SongRequestPage from '../Routes/SongRequestPage'
import GamblingPage from '../Routes/GamblingPage'
import CommandsPage from '../Routes/CommandsPage'
import Login from '../Routes/LoginPage'

import Navbar from './Navbar'
import './Layout.scss'
import Footer from '../Content/Footer'
import VideoPlayer from '../Content/VideoPlayer'
import LoadingPage from '../Routes/LoadingPage'
import { useEffect } from 'react'

export function RedirectToLogin() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
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
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<RedirectToLogin />} />
        </Routes>
      </div>
      <Footer />
      <VideoPlayer />
    </>
  )
}

export default Layout
