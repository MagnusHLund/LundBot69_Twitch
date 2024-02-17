import react from 'react'
import './Button.css'
import IStandardInputProps from './IStandardInputProps'
import cn from 'classnames'

interface ButtonProps extends IStandardInputProps {
  children?: react.ReactNode
  width?: string
  height?: string
}

const Button: React.FC<ButtonProps> = ({
  isDisabled = false,
  children,
  onClick,
  width = '90px',
  height = '30px',
  cursor = 'pointer',
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={cn('button', {
        isDisabled: isDisabled,
      })}
      style={{ height: height, width: width, cursor: cursor }}
    >
      <div className="button__children">{children}</div>
    </button>
  )
}

export default Button
