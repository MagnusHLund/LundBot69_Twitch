import React from 'react'
import './HomePage.scss'
import HomeMusicSection from '../Sections/Home/HomeMusicSection'
import HomeSettingsSection from '../Sections/Home/HomeSettingsSection'
import HomeInfoSection from '../Sections/Home/HomeInfoSection'
import HomeGoalsSection from '../Sections/Home/HomeGoalsSection'

const HomePage: React.FC = () => {
  return (
    <>
      <HomeMusicSection />
      <HomeSettingsSection />
      <HomeInfoSection />
      <HomeGoalsSection />
    </>
  )
}

export default HomePage
