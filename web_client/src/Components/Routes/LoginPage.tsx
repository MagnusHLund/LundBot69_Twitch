import React from 'react'
import './LoginPage.scss'
import ContentBox from '../Content/ContentBox'
import Title from '../Content/Title'
import VideoPlayer from '../Content/VideoPlayer'
import HomeMusicSection from '../Sections/Home/HomeMusicSection'
import HomeSettingsSection from '../Sections/Home/HomeSettingsSection'
import HomeInfoSection from '../Sections/Home/HomeGiveawaySection'
import HomeGoalsSection from '../Sections/Home/HomeGoalsSection'
import LoginForm from '../Sections/Login/Subsections/LoginForm'
import LoginSection from '../Sections/Login/LoginSection'

const LoginPage: React.FC = () => {
  // TODO hide navbar on login page
  return (
    <>
      <LoginSection />
    </>
  )
}

export default LoginPage
