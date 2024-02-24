import React from 'react'
import './GamblingEarningConditions.scss'

interface IGamblingEarningConditions {
  text: string
  fontSize?: string
}

const GamblingEarningConditions: React.FC<IGamblingEarningConditions> = ({
  text,
  fontSize = '20px',
}) => {
  return (
    <h1 style={{ fontSize: fontSize }} className="title">
      {text}
    </h1>
  )
}

export default GamblingEarningConditions
