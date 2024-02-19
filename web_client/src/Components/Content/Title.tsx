import React from 'react'
import './Title.scss'

interface ITitleProps {
  text: string
  fontSize?: string
}

const Title: React.FC<ITitleProps> = ({ text, fontSize = '20px' }) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="title">
      {text}
    </h1>
  )
}

export default Title
