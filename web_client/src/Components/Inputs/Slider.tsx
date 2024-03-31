import React from 'react'
import './Slider.scss'
import IStandardInputProps from './IStandardInputProps'
import cn from 'classnames'

interface ICheckboxProps extends IStandardInputProps {
  children?: React.ReactNode
  width?: string
  height?: string
  thumbCursor?: 'pointer' | 'grab'
  minValue?: number
  maxValue?: number
  value?: number
  onMouseUp?: () => void
  onSliderChange?: (value: string) => void
}

const Slider: React.FC<ICheckboxProps> = ({
  isDisabled = false,
  onClick,
  width = '180px',
  height = '7.5px',
  cursor = 'pointer',
  thumbCursor = 'grab',
  minValue = 0,
  maxValue = 100,
  value = 0,
  onMouseUp,
  onSliderChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
    if (onSliderChange) {
      onSliderChange(newValue.toString())
    }
  }

  return (
    <input
      type="range"
      disabled={isDisabled}
      onClick={onClick}
      className={cn('Slider', {
        isDisabled: isDisabled,
        thumbCursor: thumbCursor,
      })}
      min={minValue}
      max={maxValue}
      value={value}
      onMouseUp={onMouseUp}
      onChange={handleChange}
      style={{ height: height, width: width, cursor: cursor }}
    />
  )
}

export default Slider
