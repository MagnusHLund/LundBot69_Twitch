import react from 'react'
import './Button.scss'
import IStandardInputProps from './IStandardInputProps'
import cn from 'classnames'

interface IButtonProps extends IStandardInputProps {
  children?: react.ReactNode
  width?: string
  height?: string
  hint?: string
}

const Button: React.FC<IButtonProps> = ({
  isDisabled = false,
  children,
  onClick,
  width = '90px',
  height = '30px',
  cursor = 'pointer',
  hint,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={cn('button', {
        isDisabled: isDisabled,
      })}
      style={{ height: height, width: width, cursor: cursor }}
      title={hint}
    >
      {children}
    </button>
  )
}

export default Button
