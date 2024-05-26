import './App.scss'
import navLinks from './Assets/NavbarData.json'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Content/Footer'
import Navbar from './Components/Navigation/Navbar'
import HomePage from './Components/Routes/HomePage'
import LoginPage from './Components/Routes/LoginPage'
import LoadingPage from './Components/Routes/LoadingPage'
import VideoPlayer from './Components/Content/VideoPlayer'
import CommandsPage from './Components/Routes/CommandsPage'
import GamblingPage from './Components/Routes/GamblingPage'
import SongRequestPage from './Components/Routes/SongRequestPage'

import useWebSocket from './Utils/WebSocketConnection'
import { useEffect } from 'react'

const App: React.FC = () => {
  const { message, sendMessage } = useWebSocket('ws://localhost:8080')
  useEffect(() => {
    if (message) {
      console.log(message)
    }
  }, [message])

  const handleClick = () => {
    sendMessage({ type: 'giveawayParticipants' })
  }

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </div>
      <button onClick={handleClick}>fffffff</button>
      <Footer />
      <VideoPlayer />
    </>
  )
}

export default App
