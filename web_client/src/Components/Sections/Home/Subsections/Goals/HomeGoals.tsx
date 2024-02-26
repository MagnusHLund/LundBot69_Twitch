import React, { useState } from 'react'
import './HomeGoals.scss'
import Slider from '../../../../Inputs/Slider'
import Title from '../../../../Content/Title'
import HomeGoalsRange from './HomeGoalsRange'

interface IHomeGoals {
  goalType: 'sub' | 'follower'
}

// https://static.twitchcdn.net/assets/glow-orbit-f9de7d6ec6d53b80952a.gif show this on channel-goals hover

const HomeGoals: React.FC<IHomeGoals> = ({ goalType }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const renderHoveringElement = () => {
    if (isHovering) {
      return (
        <img
          src="https://static.twitchcdn.net/assets/glow-orbit-f9de7d6ec6d53b80952a.gif"
          className="channel-goals__container--image--hover"
          alt="Orbit gif"
        />
      )
    }
    return null
  }

  return (
    <div
      className="channel-goals"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="channel-goals__container">
        <div className="channel-goals__container--image">
          {goalType === 'sub' && (
            <img
              src="/Stars.png"
              className="channel-goals__container--image--sub"
              alt="2 stars"
            />
          )}
          {goalType === 'follower' && (
            <img
              src="/Hearts.png"
              className="channel-goals__container--image--follower"
              alt="2 hearts"
            />
          )}
          {renderHoveringElement()}
        </div>
        <div className="channel-goals__container--text">
          <Title text="8 followers to go!" />
          <p>236/244 followers</p>
          <HomeGoalsRange width="96.7%" />
        </div>
      </div>
    </div>
  )
}

export default HomeGoals
