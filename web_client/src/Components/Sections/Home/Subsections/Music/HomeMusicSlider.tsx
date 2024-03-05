import React, { useEffect, useState } from 'react'
import './HomeMusicSlider.scss'
import Slider from '../../../../Inputs/Slider'
import Inline from '../../../../Content/Inline'
import { useSelector } from 'react-redux'
import songDuration from '../../../../../Utils/SongDuration'

interface IHomeMusicSlider {
  fontSize?: string
}

const HomeMusicSlider: React.FC<IHomeMusicSlider> = ({
  leftText = '00:00',
}) => {
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTimeStamp, setvideoTimeStamp] = useState(0)
  const videoState = useSelector((state) => state.videoPlayer)
  useEffect(() => {
    setVideoDuration(videoState.videoDuration)
  }, [videoState.videoDuration])

  useEffect(() => {
    setvideoTimeStamp(videoState.videoTimeStamp)
  }, [videoState.videoTimeStamp])

  return (
    <Inline className="music-slider">
      <p className="music-slider--text">{songDuration(videoTimeStamp)}</p>
      <Slider value={videoTimeStamp} maxValue={videoDuration} />
      <p className="music-slider--text">{songDuration(videoDuration)}</p>
    </Inline>
  )
}

export default HomeMusicSlider
