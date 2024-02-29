import React from 'react'
import './Title.scss'
import cn from 'classnames'

interface ITitleProps {
  text: string
  fontSize?: string
  className?: string
  isInline?: boolean
}

const Title: React.FC<ITitleProps> = ({
  text,
  fontSize = '20px',
  isInline = false,
  className = '',
}) => {
  return (
    <h1
      style={{ fontSize: fontSize }}
      className={cn('title', className, { isInline: isInline })}
    >
      {text}
    </h1>
  )
}

export default Title
