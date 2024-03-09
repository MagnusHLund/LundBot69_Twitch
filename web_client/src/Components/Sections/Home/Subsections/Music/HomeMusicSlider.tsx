import React, { useEffect, useState } from 'react'
import './HomeMusicSlider.scss'
import Slider from '../../../../Inputs/Slider'
import Inline from '../../../../Content/Inline'
import { useSelector } from 'react-redux'
import songDuration from '../../../../../Utils/songDuration'
import {
  setUserMovingVideoSlider,
  setVideoTimeStamp,
} from '../../../../../Redux/Actions/VideoPlayerActions'

const HomeMusicSlider: React.FC = () => {
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTimeStamp, setvideoTimeStamp] = useState(0)
  const videoState = useSelector((state) => state.videoPlayer)
  useEffect(() => {
    setVideoDuration(videoState.videoDuration)
  }, [videoState.videoDuration])

  useEffect(() => {
    setvideoTimeStamp(videoState.videoTimeStamp)
  }, [videoState.videoTimeStamp])

  const handleSliderChange = (newTimeStamp: string) => {
    console.log('test')
    setUserMovingVideoSlider(true)
    setVideoTimeStamp(newTimeStamp)
  }

  const handleMouseUp = () => {
    setUserMovingVideoSlider(false)
  }

  return (
    <Inline className="music-slider">
      <p className="music-slider--text">
        {songDuration(videoState.videoTimeStamp)}
      </p>
      <Slider
        value={videoTimeStamp}
        maxValue={videoDuration}
        onChange={handleSliderChange}
        onMouseUp={handleMouseUp}
      />
      <p className="music-slider--text">
        {songDuration(videoState.videoDuration)}
      </p>
    </Inline>
  )
}

export default HomeMusicSlider
