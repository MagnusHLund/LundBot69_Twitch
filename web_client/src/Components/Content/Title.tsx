import React from 'react'
import './Title.scss'

interface TitleProps {
  text: string
  fontSize?: string
}

const Title: React.FC<TitleProps> = ({ text, fontSize = '20px' }) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="title">
      {text}
    </h1>
  )
}

export default Title
