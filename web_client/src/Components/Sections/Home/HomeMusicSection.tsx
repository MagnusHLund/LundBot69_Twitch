import React from 'react'
import './HomeMusicSection.scss'
import HomeMusicButtons from './Subsections/HomeMusicButtons'
import HomeMusicSlider from './Subsections/MusicSlider'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import VideoPlayer from '../../Content/VideoPlayer'

const HomeMusicSection: React.FC = () => {
  return (
    <div>
      <Title text="Music" />
      <VideoPlayer width="auto" height="auto" />
      <RowHandler>
        <HomeMusicButtons />
        <HomeMusicSlider />
      </RowHandler>
    </div>
  )
}

export default HomeMusicSection
