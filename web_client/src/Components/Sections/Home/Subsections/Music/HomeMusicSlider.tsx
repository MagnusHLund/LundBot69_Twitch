import React, { useEffect } from 'react'
import './HomeMusicSlider.scss'
import Slider from '../../../../Inputs/Slider'
import Inline from '../../../../Content/Inline'
import { useDispatch, useSelector } from 'react-redux'
import convertTime from '../../../../../Utils/convertTime'
import {
  setUserMovingVideoSlider,
  setVideoTimeStamp,
} from '../../../../../Redux/Actions/VideoPlayerActions'

const HomeMusicSlider: React.FC = () => {
  const dispatch = useDispatch()
  const videoState = useSelector((state) => state.videoPlayer)

  let videoDuration = 0
  let videoTimeStamp = 0

  useEffect(() => {
    videoDuration = videoState.videoDuration
  }, [videoState.videoDuration])

  useEffect(() => {
    videoTimeStamp = videoState.videoTimeStamp
  }, [videoState.videoTimeStamp])

  const handleSliderChange = (newTimeStamp: string) => {
    dispatch(setUserMovingVideoSlider(true))
    dispatch(setVideoTimeStamp(newTimeStamp))
  }

  const handleMouseUp = () => {
    dispatch(setUserMovingVideoSlider(false))
  }

  return (
    <Inline className="music-slider">
      <p className="music-slider--text">
        {convertTime(videoState.videoTimeStamp)}
      </p>
      <Slider
        value={videoTimeStamp}
        maxValue={videoDuration}
        onSliderChange={handleSliderChange}
        onMouseUp={handleMouseUp}
      />
      <p className="music-slider--text">
        {convertTime(videoState.videoDuration)}
      </p>
    </Inline>
  )
}

export default HomeMusicSlider
