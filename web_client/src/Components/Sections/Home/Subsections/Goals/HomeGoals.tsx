import React from 'react'
import './HomeGoals.scss'
import Title from '../../../../Content/Title'
import HomeGoalsRange from './HomeGoalsRange'
import InputForm from '../../../../Content/InputForm'
import Inline from '../../../../Content/Inline'

interface IHomeGoals {
  goalType: 'sub' | 'follower'
}

const HomeGoals: React.FC<IHomeGoals> = ({ goalType }) => {
  return (
    <div className="channel-goals">
      <Title
        text={`8 ${goalType == 'sub' ? 'subscribers' : 'followers'} to go!`}
      />
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
          <p>236/244 followers</p>
          <HomeGoalsRange width="96.7%" />
        </div>
      </div>
      <InputForm
        title="Change goal"
        initialValues={undefined}
        isInline={true}
        submitTitle="save"
      >
        <input
          type="number"
          min={0}
          placeholder="New goal"
          className="channel-goals__container--input inline"
        />
      </InputForm>
    </div>
  )
}

export default HomeGoals
