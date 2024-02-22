import React from 'react'
import './Home.scss'
import ContentBox from '../Content/ContentBox'
import Title from '../Content/Title'
import VideoPlayer from '../Content/VideoPlayer'
import HomeMusicSection from '../Sections/Home/HomeMusicSection'
import HomeSettingsSection from '../Sections/Home/HomeSettingsSection'
import HomeInfoSection from '../Sections/Home/HomeInfoSection'
import HomeGoalsSection from '../Sections/Home/HomeGoalsSection'

const Home: React.FC = () => {
  // TODO: Why did I not just include the content boxes into the sections? SmOl BrAiN.
  return (
    <>
      <HomeMusicSection />
      <HomeSettingsSection />
      <HomeInfoSection />
      <HomeGoalsSection />
    </>
  )
}

export default Home
