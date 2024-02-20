import React from 'react'
import './HomeSettingsSlider.scss'
import RowHandler from '../../../../Content/RowHandler'
import Title from '../../../../Content/Title'
import Slider from '../../../../Inputs/Slider'

interface IHomeSettingsSliderProps {
  title: string
  fontSize?: string
  className?: string
}

const HomeSettingsSlider: React.FC<IHomeSettingsSliderProps> = ({
  title,
  fontSize = '18px',
  className,
}) => {
  return (
    <RowHandler className={className}>
      <Title text={title} fontSize={fontSize} />
      <Slider />
    </RowHandler>
  )
}

export default HomeSettingsSlider
