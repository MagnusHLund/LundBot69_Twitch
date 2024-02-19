import react from 'react'
import './Slider.scss'
import IStandardInputProps from './IStandardInputProps'
import cn from 'classnames'

interface ICheckboxProps extends IStandardInputProps {
  children?: react.ReactNode
  width?: string
  height?: string
  thumbCursor?: 'pointer' | 'grab'
}

const Slider: React.FC<ICheckboxProps> = ({
  isDisabled = false,
  onClick,
  width = '180px',
  height = '7.5px',
  cursor = 'pointer',
  thumbCursor = 'grab',
}) => {
  return (
    <input
      type="range"
      disabled={isDisabled}
      onClick={onClick}
      className={cn('Slider', {
        isDisabled: isDisabled,
        thumbCursor: thumbCursor,
      })}
      style={{ height: height, width: width, cursor: cursor }}
    />
  )
}

export default Slider
