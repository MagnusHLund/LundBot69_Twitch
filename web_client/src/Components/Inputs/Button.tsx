import react from 'react'
import './Button.scss'
import IStandardInputProps from './IStandardInputProps'
import cn from 'classnames'

interface IButtonProps extends IStandardInputProps {
  children?: react.ReactNode
  className?: string
  width?: string
  height?: string
  hint?: string
  isWhite?: boolean
}

const Button: React.FC<IButtonProps> = ({
  isDisabled = false,
  children,
  onClick,
  width = '90px',
  height = '30px',
  cursor = 'pointer',
  hint,
  className = '',
  isWhite = false,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={cn(`button ${className}`, {
        isDisabled: isDisabled,
        white: isWhite,
      })}
      style={{ height: height, width: width, cursor: cursor }}
      title={hint}
    >
      {children}
    </button>
  )
}

export default Button
