import React from 'react'
import './LoginErrorText.scss'
import cn from 'classnames'

interface ITitleProps {
  text: string
  fontSize?: string
}

const LoginErrorText: React.FC<ITitleProps> = ({ text, fontSize = '15px' }) => {
  return (
    <p style={{ fontSize: fontSize }} className="error-message">
      {text}
    </p>
  )
}

export default LoginErrorText
