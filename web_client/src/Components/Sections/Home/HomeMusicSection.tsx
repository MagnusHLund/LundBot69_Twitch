import React, { useEffect, useState } from 'react'
import './HomeMusicSection.scss'
import HomeMusicButtons from './Subsections/Music/HomeMusicButtons'
import HomeMusicSlider from './Subsections/Music/HomeMusicSlider'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import HomeMusicInfo from './Subsections/Music/HomeMusicInfo'
import ContentBox from '../../Content/ContentBox'
import { useSelector } from 'react-redux'

const HomeMusicSection: React.FC = () => {
  const videoState = useSelector((state) => state.videoPlayer)
  const [videoTitle, setVideoTitle] = useState('n/a')
  useEffect(() => {
    setVideoTitle(videoState.videoTitle)
  }, [videoState.videoTitle])

  return (
    <ContentBox>
      <div className="home-music-section">
        <Title text="Music" />
        <div className="home-music-section__container">
          <RowHandler className="home-music-section__row-handler--info">
            <HomeMusicInfo
              headerText="Song title:"
              name={videoTitle ?? 'n/a'}
            />
            <HomeMusicSlider />
            <HomeMusicInfo headerText="Requested by:" />
          </RowHandler>
          <RowHandler className="home-music-section__row-handler--video">
            <HomeMusicButtons />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeMusicSection
