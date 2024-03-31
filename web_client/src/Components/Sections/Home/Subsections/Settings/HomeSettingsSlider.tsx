import React from 'react'
import './HomeSettingsSlider.scss'
import RowHandler from '../../../../Content/RowHandler'
import Title from '../../../../Content/Title'
import Slider from '../../../../Inputs/Slider'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { setMusicVolume } from '../../../../../Redux/Actions/SettingsActions'

interface IHomeSettingsSliderProps {
  title: string
  fontSize?: string
  className?: string
  cookieName?: string
}

const HomeSettingsSlider: React.FC<IHomeSettingsSliderProps> = ({
  title,
  fontSize = '18px',
  className,
  cookieName = '',
}) => {
  const dispatch = useDispatch()
  const [cookie, setCookie] = useCookies([cookieName])
  dispatch(setMusicVolume(cookie.MusicVolume))

  const handleChange = (strSliderValue: string) => {
    const sliderValue = parseInt(strSliderValue)
    setCookie(cookieName, sliderValue ?? 50)
    dispatch(setMusicVolume(sliderValue))
  }

  return (
    <RowHandler className={className}>
      <Title text={title} fontSize={fontSize} />
      <Slider onSliderChange={handleChange} value={cookie.MusicVolume} />
    </RowHandler>
  )
}

export default HomeSettingsSlider
