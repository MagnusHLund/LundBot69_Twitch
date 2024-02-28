import React from 'react'
import './HomeGoals.scss'
import Title from '../../../../Content/Title'
import HomeGoalsRange from './HomeGoalsRange'

interface IHomeGoals {
  goalType: 'sub' | 'follower'
}

const HomeGoals: React.FC<IHomeGoals> = ({ goalType }) => {
  return (
    <div className="channel-goals">
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
