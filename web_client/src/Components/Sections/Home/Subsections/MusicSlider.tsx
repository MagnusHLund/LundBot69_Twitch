import React from 'react'
import './MusicSlider.scss'
import Slider from '../../../Inputs/Slider'
import Inline from '../../../Content/Inline'

interface IHomeMusicSlider {
  fontSize?: string
  leftText?: string
}

const HomeMusicSlider: React.FC<IHomeMusicSlider> = ({
  leftText = '00:00',
}) => {
  return (
    <Inline className="music-slider">
      <p className="music-slider__left-text">{leftText}</p>
      <Slider />
      <p className="music-slider__right-text">TODO</p>
    </Inline>
  )
}

export default HomeMusicSlider
