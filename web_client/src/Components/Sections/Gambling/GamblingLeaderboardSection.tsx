import React from 'react'
import './GamblingLeaderBoardSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import DataTable from '../../Content/DataTable'

// TODO: Maybe a line between each of the row handlers wouldn't look so bad
// TODO: Fix all the wrong class names in this file and most other section file

const GamblingLeaderBoardSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="gambling-leaderboard-section">
        <Title text="Points leaderboard" />
        <div className="gambling-leaderboard-section__container">
          <RowHandler className="gambling-leaderboard-section__row-handler--manage">
            <DataTable
              data={[
                {
                  id: { value: 1 },
                  name: { value: 'John', maxLength: 10 },
                  age: { value: 30, maxLength: 2 },
                },
                {
                  id: { value: 2 },
                  name: { value: 'Jane', maxLength: 15 },
                  age: { value: 25, maxLength: 2 },
                },
                {
                  id: { value: 3 },
                  name: { value: 'Doe', maxLength: 10 },
                  age: { value: 40, maxLength: 2 },
                },
              ]}
              onDelete={() => {}}
              editable={true}
              onApply={() => {}}
            />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default GamblingLeaderBoardSection
