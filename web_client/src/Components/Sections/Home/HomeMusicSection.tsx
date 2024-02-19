import React from 'react'
import './HomeMusicSection.scss'
import HomeMusicButtons from './Subsections/Music/HomeMusicButtons'
import HomeMusicSlider from './Subsections/Music/HomeMusicSlider'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import VideoPlayer from '../../Content/VideoPlayer'
import HomeMusicInfo from './Subsections/Music/HomeMusicInfo'

const HomeMusicSection: React.FC = () => {
  return (
    <div className="home-music-section">
      <Title text="Music" />
      <div className="home-music-section__container">
        <RowHandler className="home-music.section__row-handler--video">
          <VideoPlayer width="auto" height="auto" />
          <HomeMusicButtons />
        </RowHandler>
        <RowHandler className="home-music-section__row-handler--info">
          <HomeMusicInfo headerText="Song title:" />
          <HomeMusicSlider />
          <HomeMusicInfo headerText="Requested by:" />
        </RowHandler>
      </div>
    </div>
  )
}

export default HomeMusicSection
