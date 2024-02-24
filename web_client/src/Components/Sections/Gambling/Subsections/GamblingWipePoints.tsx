import React from 'react'
import './GamblingWipePoints.scss'

interface IGamblingWipePoints {
  text: string
  fontSize?: string
}

const GamblingWipePoints: React.FC<IGamblingWipePoints> = ({
  text,
  fontSize = '20px',
}) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="title">
      {text}
    </h1>
  )
}

export default GamblingWipePoints
