import react from 'react'
import './CheckBox.scss'
import IStandardInputProps from './IStandardInputProps'
import cn from 'classnames'

interface ICheckboxProps extends IStandardInputProps {
  children?: react.ReactNode
  width?: string
  height?: string
}

const CheckBox: React.FC<ICheckboxProps> = ({
  isDisabled = false,
  onClick,
  width = '20px',
  height = '20px',
  cursor = 'pointer',
}) => {
  return (
    <input
      type="checkbox"
      disabled={isDisabled}
      onClick={onClick}
      className={cn('CheckBox', {
        isDisabled: isDisabled,
      })}
      style={{ height: height, width: width, cursor: cursor }}
    />
  )
}

export default CheckBox
