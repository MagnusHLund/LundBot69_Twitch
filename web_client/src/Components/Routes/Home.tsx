import React from 'react'
import './Home.scss'
import ContentBox from '../Content/ContentBox'
import Title from '../Content/Title'
import VideoPlayer from '../Content/VideoPlayer'
import HomeMusicSection from '../Sections/Home/HomeMusicSection'

const Home: React.FC = () => {
  // TODO: Split different segments (ContentBoxes, into its own component)
  return (
    <>
      <ContentBox>
        <HomeMusicSection />
      </ContentBox>
      <ContentBox></ContentBox>
    </>
  )
}

export default Home
