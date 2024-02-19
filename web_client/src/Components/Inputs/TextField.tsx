import React from 'react'
import './textField.scss'
import cn from 'classnames'
import IStandardInputProps from './IStandardInputProps'

// Define the props interface for the Navbar component
interface ITextFieldProps extends IStandardInputProps {
  placeholder?: string
  editable?: boolean
  value?: string
  maxLength?: number
}

// Define the Navbar functional component
const TextField: React.FC<ITextFieldProps> = ({
  placeholder,
  editable,
  value,
  maxLength,
  onChange,
}) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      className={cn('text-field', {
        disabled: !editable,
        placeholder: placeholder,
      })}
    />
  )
}

export default TextField
