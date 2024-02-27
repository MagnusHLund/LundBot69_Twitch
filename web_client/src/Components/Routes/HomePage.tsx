import React from 'react'
import './HomePage.scss'
import HomeMusicSection from '../Sections/Home/HomeMusicSection'
import HomeSettingsSection from '../Sections/Home/HomeSettingsSection'
import HomeGiveawaySection from '../Sections/Home/HomeGiveawaySection'
import HomeGoalsSection from '../Sections/Home/HomeGoalsSection'

const HomePage: React.FC = () => {
  return (
    <>
      <HomeMusicSection />
      <HomeSettingsSection />
      <HomeGoalsSection />
      <HomeGiveawaySection />
    </>
  )
}

export default HomePage
