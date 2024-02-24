import React from 'react'
import './GamblingAddSubtractPoints.scss'

interface IGamblingAddSubtractPoints {
  text: string
  fontSize?: string
}

const GamblingAddSubtractPoints: React.FC<IGamblingAddSubtractPoints> = ({
  text,
  fontSize = '20px',
}) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="title">
      {text}
    </h1>
  )
}

export default GamblingAddSubtractPoints
