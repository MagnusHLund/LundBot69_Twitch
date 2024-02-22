import React from 'react'
import './GamblingLeaderBoardSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'

// TODO: Maybe a line between each of the row handlers wouldn't look so bad
// TODO: Fix all the wrong class names in this file and most other section file

const GamblingLeaderBoardSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-settings-section">
        <Title text="Points leaderboard" />
        <div className="home-settings-section__container">
          <RowHandler className="home-settings-section__row-handler--manage">
            Leaderboard of peoples points
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default GamblingLeaderBoardSection
