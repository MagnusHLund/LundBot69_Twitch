import React from 'react'
import './Home.scss'
import ContentBox from '../Content/ContentBox'
import Title from '../Content/Title'
import VideoPlayer from '../Content/VideoPlayer'
import HomeMusicSection from '../Sections/Home/HomeMusicSection'
import HomeSettingsSection from '../Sections/Home/HomeSettingsSection'
import HomeInfoSection from '../Sections/Home/HomeInfoSection'

const Home: React.FC = () => {
  // TODO: Why did I not just include the content boxes into the sections? SmOl BrAiN.
  return (
    <>
      <ContentBox minWidth="34%">
        <HomeMusicSection />
      </ContentBox>
      <ContentBox minWidth="34%">
        <HomeSettingsSection />
      </ContentBox>
      <ContentBox minWidth="34%">
        <HomeInfoSection />
      </ContentBox>
    </>
  )
}

export default Home
